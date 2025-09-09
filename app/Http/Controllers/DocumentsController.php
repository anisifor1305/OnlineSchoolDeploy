<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class DocumentsController extends Controller
{
    public function getPolicy()
    {
        try{
        return response()->file(storage_path("app/private/documents/policy.docx"));
        }
        catch(Exception $e){
            return view('starwarsError', ['exception'=>new Exception('error')]);
        }
    
    }
    public function getOffer()
    {
        try{
        return response()->file(storage_path("app/private/documents/offer.docx"));
        }
        catch(Exception $e){
            return view('starwarsError', ['exception'=>new Exception('error')]);
        }
    
    }
}
