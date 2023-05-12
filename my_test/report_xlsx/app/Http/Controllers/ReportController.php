<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Imports\ReportImport;
use Exception;

class ReportController extends Controller
{
    public function index()
    {
        return view('report');
    }

    public function reportImport(Request $request)
    {
        $validation = $request->validate([
            'file' => 'bail|required|mimes:xlsx',
        ]);

        try {
            $file = $request->file('file')->store('import');
            $import = new ReportImport();
            config(['excel.import.startRow' => 2]);
            $import->import($file);

            if ($import->failures()->isNotEmpty()) {
                return back()->withFailures($import->failures());
            }

            return back()->withStatus('Файл успешно загружен');
        } catch (Exception $exception) {
            return $exception->getMessage();
        }
    }


}
