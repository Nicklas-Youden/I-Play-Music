import Login from "../pages/Login"
import {render, screen} from "@testing-library/react"

test("Se om Link er der", function(){
  render(<Login/>)
  var link = screen.findByText(/https:\/\/accounts\.spotify\.com\/authorize/i);
  expect(link)
})