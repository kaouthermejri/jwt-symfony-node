<?php

namespace App\Controller;

use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;
use \Firebase\JWT\JWT;

class HomeController
{

	/**
	 * @Route("/")
	 */
	public function index(Environment $twig, UserInterface $user = null)
	{

		if (!is_null($user)) {
		
			$token = [
				'username'	=> $user->getUsername(),
				'roles'		=> $user->getRoles(),
			];

			$token = JWT::encode($token, 'my_secret_password');
		} else {
			$token = '';
		}

		return new Response($twig->render('index.html.twig', [
			'token'	=> $token,
		]));
	}

}