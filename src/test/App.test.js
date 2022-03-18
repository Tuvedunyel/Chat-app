import { render } from "@testing-library/react"
import App from "../App"

describe('App unit test', () => {
    it('App is rendered', () => {
        render(<App />)
    })
})