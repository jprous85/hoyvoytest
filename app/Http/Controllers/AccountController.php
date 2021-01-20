<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Psy\Util\Json;

class AccountController extends Controller
{
    public function login(Request $request)
    {
        if ($request['api_token'] != null) {
            $user = User::where('api_token', $request->api_token)->get();
        } else {
            try {
                $user = User::where('email', $request->email)->get();
                if ($user == null || Hash::check($request->password, $user[0]->password) == false) {
                    return Json::encode(['data' => 'KO']);
                }
            }
            catch (\Exception $e) {
                return Json::encode(['data' => 'KO']);
            }
        }

        return $user[0];
    }
}
