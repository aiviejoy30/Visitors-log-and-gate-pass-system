<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Visitor extends Model
{
    use HasFactory;

    protected $fillable =[
        'name',
        'contact_info',
        'purpose',
        'person_to_visit',
        'status',
        'time_in',
        'time_out',
        'qr_code'
    ];

    protected $casts =[
        'time_in' => 'datetime',
        'time_out' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // 1. IPAPASA NI LARAVEL ANG MGA BAGONG 'FORMATTED' FIELDS NA ITO SA REACT
    protected $appends =['display_date', 'display_time_in', 'display_time_out'];

    // 2. I-LOCK SA PHILIPPINE TIME ANG DATE (MM-DD-YY)
    public function getDisplayDateAttribute()
    {
        return $this->created_at ? Carbon::parse($this->created_at)->timezone('Asia/Manila')->format('m-d-y') : '---';
    }

    // 3. I-LOCK SA PHILIPPINE TIME ANG TIME IN (03:54 PM)
    public function getDisplayTimeInAttribute()
    {
        $time = $this->time_in ?: $this->created_at;
        return $time ? Carbon::parse($time)->timezone('Asia/Manila')->format('h:i A') : '---';
    }

    // 4. I-LOCK SA PHILIPPINE TIME ANG TIME OUT (04:10 PM)
    public function getDisplayTimeOutAttribute()
    {
        $time = $this->time_out ?: ($this->status === 'Outside' ? $this->updated_at : null);
        return $time ? Carbon::parse($time)->timezone('Asia/Manila')->format('h:i A') : '---';
    }
}