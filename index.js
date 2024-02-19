
function setResume() {
    const service = document.getElementById("checkout-selection");
    service.innerHTML = "<h6 class='my-0'>Resume</h6><small class='text-body-secondary'>4-day Resume Overhaul</small>";
    document.getElementById("price").innerHTML = "<span id='price' class='text-body-secondary'>$50.95</span>"
    document.getElementById("total").innerHTML = "<strong>$50.95</strong>"
}

function setResumeAndCV() {
    const service = document.getElementById("checkout-selection");
    service.innerHTML = "<h6 class='my-0'>Resume + CV</h6><small class='text-body-secondary'>4-day Resume Overhaul + Cover Letter</small>";
    document.getElementById("price").innerHTML = "<span id='price' class='text-body-secondary'>$75.95</span>"
    document.getElementById("total").innerHTML = "<strong>$75.95</strong>"
}

function setPro() {
    const service = document.getElementById("checkout-selection");
    service.innerHTML = "<h6 class='my-0'>Pro</h6><small class='text-body-secondary'>1 week</small>";
    document.getElementById("price").innerHTML = "<span id='price' class='text-body-secondary'>$150</span>"
    document.getElementById("total").innerHTML = "<strong>$150</strong>"
}

function thankYou() {
    const content = document.getElementById("thankyou");
    const name = document.getElementById("firstName").value;
    const email = document.getElementById("email").value;
    content.innerHTML = "<div class='py-5 text-center'><h2>Thanks " + name + "!</h2><p class='lead'>A confirmation email has been sent to: " + email + "</p></div>"
}

