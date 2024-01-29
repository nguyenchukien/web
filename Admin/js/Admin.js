var std = {
	"username": "dieptv",
	"fullname": "Tran Van A",
	"pass": "dieptv"

}

var stdJson = `{
		"username": "dieptv",
		"fullname": "Tran Van A",
		"pass": "dieptv"

	}`;

var arr = [1, 5, 2, 10]
var arrJson = '[1, 5, 2, 10]'

var stdList = [
	{
		"username": "dieptv",
		"fullname": "Tran Van A",
		"pass": "dieptv"

	}, {
		"username": "dieptv",
		"fullname": "Tran Van A",
		"pass": "dieptv"

	}, {
		"username": "dieptv",
		"fullname": "Tran Van A",
		"pass": "dieptv"

	}
]

var stdListJson = `[
		{
			"username": "dieptv",
			"fullname": "Tran Van A",
			"pass": "dieptv"

		}, {
			"username": "dieptv",
			"fullname": "Tran Van A",
			"pass": "dieptv"

		}, {
			"username": "dieptv",
			"fullname": "Tran Van A",
			"pass": "dieptv"

		}
	]`
var stdListMinifyJson = '[{"username":"dieptv","fullname":"Tran Van A","pass": "dieptv"},{"username":"dieptv","fullname":"Tran Van A","pass": "dieptv"},{"username":"dieptv","fullname":"Tran Van A","pass": "dieptv"}]'


var json = JSON.stringify(stdList)
console.log(json)

var arr = JSON.parse(stdListJson)
console.log(arr)

function saveLocalStorage() {
	var username = document.getElementById('username_id').value
	var fullname = document.getElementById('fullname_id').value
	var pass = document.getElementById('pass_id').value

	localStorage.setItem('username', username)
	localStorage.setItem('fullname', fullname)
	localStorage.setItem('pass', pass)
}

function readLocalStorage() {
	document.getElementById('username_id').value = localStorage.getItem('username')
	document.getElementById('fullname_id').value = localStorage.getItem('fullname')
	document.getElementById('pass_id').value = localStorage.getItem('pass')
}


var resultTag = document.getElementById('result')

var studentList = []

function saveData() {
	var username = document.getElementById('username_id').value
	var fullname = document.getElementById('fullname_id').value
	var pass = document.getElementById('pass_id').value

	var std = {
		'username': username,
		'fullname': fullname,
		'pass': pass
	}

	if (cIndex >= 0) {
		studentList[cIndex] = std
		cIndex = -1 
	} else {
		studentList.push(std)
	}

	showData()

	return false
}

function showData() {
	resultTag.innerHTML = ''

	var index = 0
	for (std of studentList) {
		resultTag.innerHTML += `<tr>
				<td>${index + 1}</td>
				<td>${std.username}</td>
				<td>${std.fullname}</td>
				<td>${std.pass}</td>
				<td>
					<button onclick="editStudent(${index})">Sua</button>
					<button onclick="removeStudent(${index})">Xoa</button>
				</td>
			</tr>`
		index++
	}
}

var cIndex = -1
function editStudent(index) {
	cIndex = index

	document.getElementById('username_id').value = studentList[index].username
	document.getElementById('fullname_id').value = studentList[index].fullname
	document.getElementById('pass_id').value = studentList[index].pass
}

function removeStudent(index) {
	var option = confirm('Are you sure you want to delete this Admin?')
	if (!option) return

	studentList.splice(index, 1)

	showData()
}