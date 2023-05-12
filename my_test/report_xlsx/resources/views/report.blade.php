<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Report</title>
</head>
<body class="antialiased">
<div class="container">
    <h1 class="h1 mb-5"> Загрузка отчета</h1>
    <div>
        @if (session('status'))
            <div class="alert alert-success h4" role="alert">
                {{session('status')}}
            </div>
        @endif
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        @if(session()->has('failures'))
            <h3 class="h3 text-danger">Проверьте данные в файле</h3>
            <table class="table table-danger">
                <tr>
                    <th scope="col">Ряд</th>
                    <th scope="col">Столбец</th>
                    <th scope="col">Ошибка</th>
                    <th scope="col">Значение</th>
                </tr>
                @foreach(session()->get('failures') as $validation)
                    <tr class="row">
                        <td> {{$validation->row()}} </td>
                        <td> {{$validation->attribute()}} </td>
                        <td>
                            <ul>
                                @foreach($validation->errors() as $e)
                                    <li>{{$e}}</li>
                                @endforeach
                            </ul>
                        </td>
                        <td>{{$validation->values()[$validation->attribute()]}}</td>
                    </tr>
                @endforeach
            </table>
        @endif
        <form action="/" method="post" enctype="multipart/form-data">
            @csrf
            <label for="formFileLg" class="form-label h3 mb-3">Выберите файл для загрузки в базу данных</label>
            <input class="form-control form-control-lg mb-3" id="formFileLg" type="file" name="file">
            <input class="btn-lg btn-primary" type="submit">
        </form>
    </div>
</div>

</body>
</html>
