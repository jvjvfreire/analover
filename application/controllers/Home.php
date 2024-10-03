<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function index()
    {
        // Carregar o helper URL
        $this->load->helper('url');

        // Array com os caminhos das fotos
        $photos = [
            base_url('assets/images/nois/adrporra.jpg'),
            base_url('assets/images/nois/bjoelingua.jpg'),
			base_url('assets/images/nois/euquando.jpg'),
			base_url('assets/images/nois/inicin.jpg'),
			base_url('assets/images/nois/kkkkkkkk.jpg'),
			base_url('assets/images/nois/linguinha.jpg'),
			base_url('assets/images/nois/nagi.jpg'),
			base_url('assets/images/nois/noisfofo.jpg')
        ];

		$gifs = [
			base_url('assets/images/gifs/beijos-kisses.gif'),
			base_url('assets/images/gifs/vontade.webp'),
			base_url('assets/images/gifs/beijo-gato.gif')
		];
		
		$randomPhoto = $photos[array_rand($photos)];
		$randomKeys = array_rand($gifs, 3);
		
		$randomGif1 = $gifs[$randomKeys[0]];
		$randomGif2 = $gifs[$randomKeys[1]];
		$randomGif3 = $gifs[$randomKeys[2]];

        $data['randomPhoto'] = $randomPhoto;
		$data['randomGif1'] = $randomGif1;
		$data['randomGif2'] = $randomGif2;
		$data['randomGif3'] = $randomGif3;
        $data['datingDate'] = '2024-08-17T00:30:00';

        $this->load->view('index', $data);
    }
}