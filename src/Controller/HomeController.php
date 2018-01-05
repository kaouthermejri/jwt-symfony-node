<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class HomeController
{

	/**
	 * @Route("/")
	 */
	public function index(Environment $twig)
	{
		return new Response($twig->render('index.html.twig'));
	}

}