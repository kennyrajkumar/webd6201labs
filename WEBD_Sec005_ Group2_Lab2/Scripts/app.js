/*
     Name: Andrei Sorescu 100706779, Kenny Rajkumar 100616412
     File: app.js 
     Desc: Executes functions needed to run the website for the WEBD6021 Labs. 
     Date: February 11, 2022 
*/

// 
class User{
    constructor(firstName, lastName, userName, email, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    Display(){
        console.log("User Information:" +
                    "\nUsername: " + this.userName +
                    "\nFirst Name: " + this.firstName +
                    "\nLast Name: " + this.lastName +
                    "\nEmail: " + this.email +
                    "\nPassword: " + this.password);
    }
}

// Start function for each webpage and calls its accompanying 
// function based on the case.
function start()
{   
    switch(document.title)
    {
        case "Lab 1: Home":
            IndexPage();
            break;
        case "Lab 1: Projects":
            ProjectsPage();
            break;
        case "Lab 1: Services":
            ServicesPage();
            break;
        case "Lab 1: About Us":
            AboutPage();
            break;
        case "Lab 1: Contact Us":
            ContactPage();
            break;
        case "Lab 2: Login":
            LoginPage();
            break;
        case "Lab 2: Register":
            RegisterPage();
            break;
    }
}

// Creates event listener for page load.
window.addEventListener("load", start);

// Function creates the Index page and assigns text to 
// the appropriate element based on the id.
function IndexPage()
{
    changeNavName("idx-projects");
    insertNavItem("idx-contact");

    document.getElementById('homepage-text').innerHTML = '<h1>Welcome to our Website</h1>';
}

// Function creates the Projects page and assigns text to 
// the appropriate element based on the id.
function ProjectsPage()
{
    var text;

    changeNavName("prod-projects");
    insertNavItem("prod-contact");

    document.getElementById('prod-header').innerHTML = '<h1>Favourite Projects</h1>';
    document.getElementById('prod-body').innerHTML = 
    `<h6>NETD 3202 - Final Project</h6>
    <img src="./images/project1.jpg" style="margin: 0 15px 0 0; float: left;" width="250" height="125">
    <p>The Workshop</p> 
    <p style="font-size:70%">This is the final project we were free to create any website of our choosing. This allowed us to use our creativity and create something we invisioned. 
                             As shown in the picture, I chose to create a website that allows users to add products they wish to sell online. 
                             They can customize their products with different, names, pictures, prices, and descriptions. We coded this website using HTML & ASP.NET Core, 
                             with a fully functioning database that stores users products and customer orders</p><br>
    <h6>MAFD 5201 - Final Project</h6>
    <img src="./images/project2.png" style="margin: 0 15px 0 0; float: left;" width="250" height="125">
    <p>Dataset Mapping/Configuration</p> 
    <p style="font-size:70%">This project illustrates the final assignment for Mainframe Development II.
                             This submission encapsulates everything I had learned over the semester. This ranges from JCL creation and executiion,
                             COBOL creation and debugging, dataset mapping, report creation, and much more. 
                             This was my favourite project as it was completed over the course of the semester, and I was able to
                             overlook all the progression I had made in the class.</p><br>
    <h6>NETD 3202 - Lab 3</h6>
    <img src="./images/project3.jpg" style="margin: 0 15px 0 0; float: left;" width="250" height="125">
    <p>Midsize LLP</p>
    <p style="font-size:70%"> In this project we were instructed to create a function windows form, that allowed users to create logs for equipment borrowed by employees. 
                              This required us to have a functioning data base to store and display all the equipment that was borrowed. 
                              We learned how to display multiple winows in the same grid by using a listbox selection to determine which window to select</p>`; 
}

// Function creates the Services page and assigns text to 
// the appropriate element based on the id.
function ServicesPage()
{
    changeNavName("srv-projects");
    insertNavItem("srv-contact");

    document.getElementById('srv-header').innerHTML = '<h1>Services</h1>';
    document.getElementById('srv-body').innerHTML = 
    `<h4>Technical Skills</h4><br>
    <img src="./images/object.png" style="margin: 0 15px 0 0; float: left;" width="95" height="95">
    <h6>Object-Oriented Programming</h6>
    <p style="font-size:70%">We are proficient in object-oriented programming languages including C#, C++, Java, and Python.
                             These skills were developed over the years enrolled in the Computer Programming and Analysis program at Durham College.
                             We have cultivated these skills through application practice, utilizing real-world case studies.</p><br>
    <img src="./images/html.png" style="margin: 0 15px 0 0; float: left;" width="95" height="95">
    <h6>Web Development</h6>
    <p style="font-size:70%">We are proficient in web development languages including XHTML, PHP, and JavaScript.
                             Over the course of our program, we have spent hundreds of hours developing practice websites while learning the key concepts of web develpment.
                             Furthermore, we delve into both client-side scripting as well as server-side scripting, and incorprate our knowledge on database querying when creating
                             these projects.</p><br>
     <h4>Soft Skills</h4><br>
     <img src="./images/teamwork.png" style="margin: 0 15px 0 0; float: left;" width="95" height="95">
     <h6>Teamwork</h6>
     <p style="font-size:70%">Our group has proven that we can work together in an effective manner in order to finish our projects.
                              We are respectful towards each other, promote each other's ideas and collaboration, and consistently 
                              stay on task when getting work done. If there are any disputes, we handle them with respect and find solutions
                              efficiently.</p><br>
     <img src="./images/timemanage.png" style="margin: 0 15px 0 0; float: left;" width="95" height="95">
     <h6>Organization</h6>
     <p style="font-size:70%">We have kept our workflow extremeley organized. When working on our projects, we organize our tasks in an efficient
                              manner that keeps our workflow consistently moving. Furthermore, we don't work seperately; thus, we are able to complete each
                              assigned task effectively in a chronological order. We have set dates to work together to promote our workflow and to achieve our 
                              final product by the assigned date.</p><br>`;
}

// Function creates the About Us page and assigns text to 
// the appropriate element based on the id.
function AboutPage()
{
    changeNavName("abt-projects");
    insertNavItem("abt-contact");

    document.getElementById('abt-header').innerHTML = '<h1>About Us!</h1>';
    document.getElementById('abt-body').innerHTML = 
    `<h4>Kenny Rajkumar</h4>
     <img src="./images/kenny.jpg" style="margin: 0 15px 0 0; float: left;" width="175" height="225">
     <p style="font-size:90%">Hello, my name is Kenny. I am in my final year at Durham College taking the Computer Programming and Analysis program.
                              Andrei and I are lab partners for WEBD 6201 in which we developed this website. To learn more about me and my academic career,
                              follow this link to my LinkedIn page!</p>
                              <p style="font-size:90%">- <a href="https://www.linkedin.com/in/kennyrajkumar/">Kenny Rajkumar</a></p><br><br><br><br>
     <h4>Andrei Sorescu</h4>
     <img src="./images/andrei.png" style="margin: 0 15px 0 0; float: left;" width="175" height="225">
     <p style="font-size:90%">Hello, my name is Andrei. I am finishing the 3 year Computer Programming and Analysis program.
                              I intend to pursue a career in programming and development. This website was development my lab partner Kenny and I to demonstrate our Lab 1 requirements. 
                              To learn more about me and my academic career, follow this link to my LinkedIn page!</p>
                              <p style="font-size:90%">- <a href="https://www.linkedin.com/in/andrei-sorescu-4071681b7/">Andrei Sorescu</a></p>`;
    
}

// Function creates the Contact Us page and assigns text to 
// the appropriate element based on the id.
function ContactPage()
{
    changeNavName("cnt-projects");
    insertNavItem("cnt-contact");

    document.getElementById('cnt-header').innerHTML = '<h1>Contact Us!</h1>';
    
}
// Function creates the Login page and assigns text to 
// the appropriate element based on the id.
function LoginPage()
{
    changeNavName("log-projects");
    insertNavItem("log-contact");

    document.getElementById('log-header').innerHTML = '<h1>Login</h1>';
}
// Function creates the Register page and assigns text to 
// the appropriate element based on the id.
function RegisterPage()
{
    changeNavName("reg-projects");
    insertNavItem("reg-contact");

    document.getElementById('reg-header').innerHTML = '<h1>Register</h1>';
    document.getElementById('reg-subheader').innerHTML = '<h5>Create your own account. It\'s free and only takes a minute.</h5>';

    CreateErrorDiv();
}
// Function that changes the navigation bar item "Products" to "Projects".
function changeNavName(id)
{
    // Creates element <a> and sets attributes id, class, and href.
    var newNode = document.createElement( "a" );
    newNode.setAttribute("id", "prod-projects");
    newNode.setAttribute("class", "nav-item nav-link");
    newNode.setAttribute("href", "./products.html");
    text = " Projects";
    // Creates element icon and sets the attribute class.
    var iconNode = document.createElement( "i" );
    iconNode.setAttribute("class", "fa-solid fa-grip");
    newNode.appendChild( iconNode );
    
    newNode.appendChild( document.createTextNode( text ) );
    // Retrieves current node and replaces new node before. 
    var currentNode = document.getElementById( id );
    currentNode.parentNode.replaceChild(newNode, currentNode);
}
// Function that creates a new object and injects it within the Navigation Bar.
function insertNavItem( id )
{
    // Creates element <a> and sets attributes id, class, and href.
    var newNode = document.createElement( "a" );
    newNode.setAttribute("id", "human-resources");
    newNode.setAttribute("class", "nav-item nav-link");
    newNode.setAttribute("href", "#");
    text = " Human Resources";
    // Creates element icon and sets the attribute class.
    var iconNode = document.createElement( "i" );
    iconNode.setAttribute("class", "fa-solid fa-person");
    newNode.appendChild( iconNode );

    newNode.appendChild( document.createTextNode( text ) );
    // Retrieves current node and inserts new node before. 
    var currentNode = document.getElementById( id );
    currentNode.parentNode.insertBefore(newNode, currentNode);
}
// Injects new div tag in the form to hold the error messages.
function CreateErrorDiv()
{
    var newNode = document.createElement( "div" );
    newNode.setAttribute("id", "ErrorMessage");
    newNode.setAttribute("class", "");
    newNode.setAttribute("style", "visibility: hidden");

    var currentNode = document.getElementById( "register-div" );
    currentNode.appendChild(newNode);
}
// Function to validate correct email notation.
function ValidateEmail() {
    var inputText = document.getElementById( "input-email" ).value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if-else statement to show or hide error messages. 
    if (inputText.match(mailFormat))
    {
        var currentNode = document.getElementById('ErrorMessage');
        currentNode.setAttribute("style", "visibility: hidden");
    }
    else
    {
        var currentNode = document.getElementById('ErrorMessage');
        currentNode.setAttribute("style", "visibility: visible");
        currentNode.innerHTML = '<p id="err" class="error-message">This email is not valid.</p>';
    }
}
// Function to validate first name field to have at least a minimum of 2 characters using regex.
function ValidateFirstName() {
    var inputFirstName = document.getElementById( "input-firstName" ).value;
    var nameFormat = /^[a-zA-z]{2,}$/;
    // if-else statement to show or hide error messages.
    if (inputFirstName.match(nameFormat))
    {
        var currentNode = document.getElementById('ErrorMessage');
        currentNode.setAttribute("style", "visibility: hidden");
    }
    else
    {
        var currentNode = document.getElementById('ErrorMessage');
        currentNode.setAttribute("style", "visibility: visible");
        currentNode.innerHTML = '<p id="err" class="error-message">Name fields need a minimum of 2 characters.</p>';
    }
}
// Function to validate last name field to have at least a minimum of 2 characters using regex.
function ValidateLastName(){
    var inputLastName = document.getElementById( "input-lastName" ).value;
    var nameFormat = /^[a-zA-z]{2,}$/;
    // if-else statement to show or hide error messages. 
    if (inputLastName.match(nameFormat))
    {
        var currentNode = document.getElementById('ErrorMessage');
        currentNode.setAttribute("style", "visibility: hidden");
    }
    else
    {
        var currentNode = document.getElementById('ErrorMessage');
        currentNode.setAttribute("style", "visibility: visible");
        currentNode.innerHTML = '<p id="err" class="error-message">Name fields need a minimum of 2 characters.</p>';
    }
}
// Function to validate password field to have at least a minimum of 6 characters using regex.
function ValidatePassword(){
    var inputPassword = document.getElementById( "input-password" ).value;
    var currentNode = document.getElementById('ErrorMessage');
    var passFormat = /^.{6,}$/;
    // if-else statement to show or hide error messages. 
    if (inputPassword.match(passFormat))
    {
        currentNode.setAttribute("style", "visibility: hidden");
    }
    else
    {
        currentNode.setAttribute("style", "visibility: visible");
        currentNode.innerHTML = '<p id="err" class="error-message">Password must be at least 6 characters long.</p>';
    }
}
// Function to validate the confirm password field in which the password and confirm password are equal.
function ValidateConfirm()
{
    let inputPassword = document.getElementById( "input-password" ).value;
    let confirmPassword = document.getElementById( "input-confirm-pass" ).value;
    var currentNode = document.getElementById('ErrorMessage');
    // if-else statement to show or hide error messages. 
    if (confirmPassword != inputPassword){
        currentNode.setAttribute("style", "visibility: visible");
        currentNode.innerHTML = '<p id="err" class="error-message">Passwords do not match.</p>';
    }
    else{
        currentNode.setAttribute("style", "visibility: hidden");
    }
}
// Function to submit form and display user information in console via User class.
function SubmitForm(){
    var firstName = document.getElementById("input-firstName").value;
    var lastName = document.getElementById("input-lastName").value;
    var email = document.getElementById("input-email").value;
    var password = document.getElementById("input-password").value;
    var userName = firstName + "." + lastName;

    let user = new User(firstName, lastName, userName, email, password);
    user.Display();
    // Resets and clears the form.
    document.forms['reg-form'].reset();
}
// Function to inject username in between 'Contact Us' and 'Login' nav items.
// Replaces 'Login' nav item with 'Logout'.
function UserLogin(){
    var name = document.getElementById("input-user").value;
    // Creates element <a> and sets attributes id, class, and href.
    var newNode = document.createElement( "a" );
    newNode.setAttribute("id", "nav-username");
    newNode.setAttribute("class", "nav-item nav-link");
    newNode.setAttribute("href", "#");
    newNode.innerHTML = "<i class=\"fa-solid fa-user-gear\"></i> " + name;

    // Retrieves current node and inserts new node before. 
    var currentNode = document.getElementById( "log-login" );
    currentNode.parentNode.insertBefore(newNode, currentNode);
    currentNode.innerHTML = "<i class=\"fa-solid fa-circle-left\"></i> Logout";
}

