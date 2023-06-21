import { tag } from "./tag"

it('Testing tag', () => {
    const htmlTag = tag('<html>')('<html>')
    const next = htmlTag.next('<html>')
    const value = next.value[0]

    expect(next.done).toBeTruthy()
    expect(value.type).toBe('TAG')
    expect(value.value).toBe('<html>')
})