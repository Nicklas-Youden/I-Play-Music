import SiteHeader from "../components/SiteHeader"
import {render, screen} from "@testing-library/react"

test("Se om siteheder indeholder ordet Featured", function(){
  render(<SiteHeader>Featured</SiteHeader>)
  var text = screen.getByText(/featured/i)
  expect(text)
})