@extends('master')
@section('breadcrumb')
<h1 class="page-header">Manage User</h1>
@endsection
@section('content')
<div id="errors"></div>
<div class="col-lg-6">
	<div class="pull-right">
		<button id="getData" class="btn btn-success">GETDATA</button>
	</div>
	<div class="clearfix">
	</div>
	<br>
	<div class="">
		<div class="table-responsive">
			<table class="table table-striped table-bordered table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
	</div>
</div>

<div class="col-lg-6">
	<div class="panel panel-default">
		<div class="panel-heading">
			CREATE USER
		</div>
		<div class="panel-body">
			<form role="form">
				<div class="form-group">
					<label>First Name</label>
					<input class="form-control" id="first_name">
					<span id="erros_first_name"></span>
				</div>
				<div class="form-group">
					<label>Last Name</label>
					<input class="form-control" id="last_name">
					<span id="erros_last_name"></span>

				</div>
				<div class="form-group">
					<label>User Name</label>
					<input class="form-control" id="user_name">
					<span id="erros_user_name"></span>
				</div>

				<div class="pull-right">
					<button  type="submit" id="submit_form" class="btn btn-success">CREATE USER</button>
				</div>
			</form>
		</div>
	</div>
</div>
@endsection

@section('script')
{{ Html::script('js/demo.js') }}
@endsection