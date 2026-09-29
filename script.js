function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    
    // Create recommendation card
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";
    
    // Add to recommendation list
    document.getElementById("all_recommendations").appendChild(element);

    // Reset input box
    recommendation.value = "";

    // Show confirmation popup (Task 9)
    showPopup(true);
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.display = 'block';
  } else {
    document.getElementById('popup').style.display = 'none';
  }
}