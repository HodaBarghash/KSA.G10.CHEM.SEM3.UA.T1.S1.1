function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5dCvuS1oFPF":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz28Z1DJtvhyqM4vK26lYjcJL1Oiz1W_wuPn_pnHdAsxgX2Qs1jWrP9C5-sMW4MLhp-1g/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

