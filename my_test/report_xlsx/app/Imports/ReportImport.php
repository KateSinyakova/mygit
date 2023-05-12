<?php

namespace App\Imports;

use App\Models\Report;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\WithValidation;

class ReportImport implements
    ToModel,
    WithStartRow,
    SkipsOnError,
    withValidation,
    skipsOnFailure,
    WithBatchInserts,
    WithChunkReading
{

    use Importable, SkipsErrors, SkipsFailures;

    public function startRow(): int
    {
        return 2;
    }

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */

    public function model(array $row)
    {
        $report = new Report();

        if ($report->find($row[0])) {
            $report->where('id', ($row[0]))->where('order_status', '=', 'Новый')->update([
                'order_status' => $row[2]
            ]);
        }
    }

    public function rules(): array
    {
        return [
            '*.0' => ['required'],
            '*.1' => ['required'],
            '*.2' => Rule::in(['Новый', 'Отклонен', 'Доставлен']),
        ];
    }

    public function batchSize(): int
    {
        return 1000;
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}




