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
        $user = User::where('email', $request->email)->get();
        if (count($user) == 0) {
            return Json::encode(
                [
                    'data'      => 'KO',
                    'message'   => 'NO_USER'
                ]
            );
        }
        else if (count($user) > 0 && !Hash::check($request->password, $user[0]->password)) {
            return Json::encode(
                [
                    'data'      => 'KO',
                    'message'   => 'NO_PASSWORD'
                ]
            );
        }
        return $user[0];
    }
}
