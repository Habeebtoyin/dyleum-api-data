# SUCCOIN ICO LAUNCH PAD API

### https://succoin-lemon.vercel.app/api/

># Admin Login End Point
   ## '/admin/login'.post

### Request
```
"username":String,
"password":String

```
> # Create Admin End Point

  ## '/admin/create'.post

### Request
```
"username":String,
"wallet":String,
"password":String

```
># Register ICO End Point

 ## "/ico/create".post

### Request
```
  name:String,
  contacts:String
  project_link:String
  project_info:String
  launch_date:String

```
># GET ICO LIST End Point
 ### "/ico/get-all".get

### Response
```
  name:String,
  contacts:String
  project_link:String
  project_info:String
  launch_date:String

```
># Get ICO by ID End Point
## "/ico/get-by-id/:id".get

### Response
```
  name:String,
  contacts:String
  project_link:String
  project_info:String
  launch_date:String

```
### Request
  ```
 /ico/update/:678hu877gsy765w7

```

"/ico/update/:id".patch

### Request
  ```
 /ico/update/:678hu877gsy765w7

```

## "/ico/delete/:id".delete

### Request
```
 /ico/delete/:678hu877gsy765w7

```


