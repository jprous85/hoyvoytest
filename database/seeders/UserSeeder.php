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

        $second_surname_list = ["Martin", "Lopez", "Salas", "Mateo", "Abas", "De Diego", "Quesada", "Alcala", "Marín", "Suarez", "Cobos","Rios"];
        for ($i = 1; $i < 51; $i++) {
            $url = "https://randomuser.me/api/1.3?nat=es";
            $content = file_get_contents($url);
            $obj = json_decode($content);

            foreach ($obj->results as $item) {
                $image = file_get_contents($item->picture->large);

                $name = $item->name->first;
                $first_surname = $item->name->last;
                $dob = $item->dob->date;
                file_put_contents($_ENV['PROJECT_URL'].'/users/' . $i . '.jpg', $image);

                DB::table('users')->insert([
                    'name' => $name,
                    'first_last_name' => $first_surname,
                    //'second_last_name' => array_rand($second_surname_list, count($second_surname_list)),
                    'email' => $item->name->first.".".$item->name->last.".".$i."@hoy-voy.com",
                    'password' => bcrypt('1234567'),
                    'photo' => $i . ".jpg",
                    'api_token' => Str::random(60),
                    'date_of_birth' => Carbon::parse($dob)
                ]);
            }
        }

    }
}
