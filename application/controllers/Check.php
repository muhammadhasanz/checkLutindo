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
        $data = ['site_id' => $this->input->post('site_id')];
        $this->session->set_userdata($data);
        redirect();
    }
    public function clear()
    {
        $this->session->unset_userdata('site_id');
        redirect();
    }
}
