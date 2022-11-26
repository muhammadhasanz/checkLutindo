<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Check extends CI_Controller
{
    public function index()
    {
        $data['site'] = '';
        $data['step1'] = '';
        $data['step2'] = '';
        $data['step3'] = '';
        $data['step4'] = '';
        if ($this->session->userdata('site_id')) {
            $site_id = $this->session->userdata('site_id');
            $site = $this->db->get_where('ltd_order', ['site_id' => $site_id])->row_array();
            $data['site'] = $this->db->get_where('ltd_order', ['site_id' => $site_id])->row_array();
            if ($site['status_verifikasi'] == 'Belum diverifikasi') {
                $data['step1'] = 'active';
                $data['step2'] = '';
                $data['step3'] = '';
                $data['step4'] = '';
            } elseif ($site['status_verifikasi'] == 'Permintaan telah diverifikasi') {
                $data['step1'] = 'success';
                $data['step2'] = 'active';
                $data['step3'] = '';
                $data['step4'] = '';
            } elseif ($site['status_verifikasi'] == 'Pembangunan selesai') {
                $data['step1'] = 'success';
                $data['step2'] = 'success';
                $data['step3'] = 'active';
                $data['step4'] = '';
            } elseif ($site['status_verifikasi'] == 'Pengkoneksian') {
                $data['step1'] = 'success';
                $data['step2'] = 'success';
                $data['step3'] = 'active';
                $data['step4'] = '';
            } elseif ($site['status_verifikasi'] == 'Site telah aktif') {
                $data['step1'] = 'success';
                $data['step2'] = 'success';
                $data['step3'] = 'success';
                $data['step4'] = 'success';
            }
        }
        $this->load->view('check/index', $data);
    }
    public function site()
    {
        $site_id = $this->input->post('site_id');
        $username = 'lutungan_indoutama@yahoo.com';
        $password = 'IBS2020';
        $url = 'https://tbm3.ibstower.com/login';
        $cookie = 'cookie.txt';
        $postdata = 'identity=' . $username . '&password=' . $password;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie);
        curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie); // <-- add this line
        curl_setopt($ch, CURLOPT_REFERER, $url);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
        $data['status_login'] = curl_exec($ch);

        if (curl_errno($ch)) {
            echo 'Curl error: ' . curl_error($ch);
            $data['message'] = 'Gagal login';
            // return (json_encode($data));
        } else {
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_URL, 'https://tbm3.ibstower.com/vendor/project/project_list/on_process/3135/ALL');
            curl_setopt($ch, CURLOPT_POST, 0);
            $result = json_decode(curl_exec($ch))->data;
            $filtered_assignment_type = array_filter($result, function ($item) {
                return in_array($item->assignment_type, ['CME']);
            });
            $id = $this->array_recursive_search_key_map($site_id, $filtered_assignment_type);
            // var_dump($id);

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_URL, 'https://tbm3.ibstower.com/vendor/project/details/' . $id . '/3135');
            curl_setopt($ch, CURLOPT_POST, 0);
            $result1 = curl_exec($ch);

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_URL, 'https://tbm3.ibstower.com/vendor/bill/index/' . $id);
            curl_setopt($ch, CURLOPT_POST, 0);
            $result2 = curl_exec($ch);

            curl_close($ch);

            preg_match_all('/<td>(.*?)<\/td>/i', trim($result1), $matches);
            preg_match('/<a href="(.*?)" target="_blank" class="btn btn-sm btn-icon btn-light">/i', $result2, $matches2);
            // var_dump($matches);
            // var_dump($matches2);
            // die;

            $data['message'] = 'Berhasil Mendapatkan API';
            $data['data'] = $matches[1] ?? NULL;
            $data['biaya'] = $matches2[1] ?? NULL;
            $site_id = $this->input->post('site_id');

            $data['check_site'] = $this->db->order_by("tahap_id", "desc")->get_where('check_site', ['site_id' => $site_id, 'status' => 1])->result();

            echo (json_encode($data));
        }
    }
    public function array_recursive_search_key_map($needle, $haystack)
    {
        foreach ($haystack as $first_level_key => $value) {
            if ($needle === $value->site_id_ibs) {
                return $value->id;
            }
        }
        return false;
    }
    public function clear()
    {
        $this->session->unset_userdata('site_id');
        redirect();
    }
}
