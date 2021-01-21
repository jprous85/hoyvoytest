<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $second_surname_list = [
            "Martin",
            "Lopez",
            "Salas",
            "Mateo",
            "Abas",
            "De Diego",
            "Quesada",
            "Alcala",
            "Marín",
            "Suarez",
            "Cobos",
            "Rios",
        ];

        $url = "https://randomuser.me/api/1.3?nat=es&results=50";
        $content = file_get_contents($url);
        $obj = json_decode($content);

        $i = 1;

        foreach ($obj->results as $item) {
            $image = file_get_contents($item->picture->large);

            $name = $item->name->first;
            $first_surname = $item->name->last;
            $dob = $item->dob->date;
            $token = Str::random(60);
            file_put_contents($_ENV['PROJECT_DESKTOP_IMAGE'].'/users/'.$token.'.jpg', $image);

            DB::table('users')->insert(
                [
                    'name' => $name,
                    'first_last_name' => $first_surname,
                    'email' => $item->name->first.".".$item->name->last.".".$i."@hoy-voy.com",
                    'password' => bcrypt('1234567'),
                    'photo' => $token.".jpg",
                    'api_token' => $token,
                    'date_of_birth' => Carbon::parse($dob),
                ]
            );
            $i++;
        }
    }
}
