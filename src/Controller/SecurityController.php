<?php

namespace App\Controller;

use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class SecurityController
{

	/**
	 * @Route("/login", name="login")
	 */
	public function login(Request $request, AuthenticationUtils $authUtils, Environment $twig)
	{
		$error = $authUtils->getLastAuthenticationError();

		$lastUsername = $authUtils->getLastUsername();

		return new Response($twig->render('login.html.twig', [
			'last_username'		=> $lastUsername,
			'error'				=> $error,
		]));
	}

}