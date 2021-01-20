<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\HomeApiController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/login', [HomeController::class, 'index'])->name('base');

Route::post('/login', [AccountController::class, 'login'])->name('login');

Route::middleware('auth:api')->get('/home', [HomeApiController::class, 'index'])->name('home');
