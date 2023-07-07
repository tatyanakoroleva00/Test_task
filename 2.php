<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>Task 2</title>
    <link rel="stylesheet" href="css/2.css">
</head>
<body>
    <div class="wrapper">
        <form method="get" class="form" id="form" action="server.php">
            <label for="name">What is your name?</label> 
            <input class="name" name="name" type="text">

            <label for="select">What will you choose? </label>
            <select class="select" name="select" id="select" >
                <option value="HTML">1 - HTML</option>
                <option value="CSS">2 - CSS</option>
                <option value="MySQL">3 - MySQL</option>
                <option value="JS">4 - JS</option>
                <option value="PHP">5 - PHP</option>
            </select>

            <label for="textarea">Can you describe why you've made this choice?</label>
            <textarea maxlength="100" name="textarea" class="textarea" placeholder="Here..."></textarea>

            <p><input type="submit" class="button submit" value="Send" ></p>
        </form>

        <div class="data" id="data">
        </div>
    </div>

    <script src="js/code.jquery.com_jquery-3.7.0.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script defer src="js/2.js"></script>
</body>
</html>