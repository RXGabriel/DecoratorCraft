import { expect, describe, test, jest, beforeEach } from '@jest/globals'

const originalHttp = jest.createMockFromModule('http')
describe('HTTP interceptor Agent', () => {
    const eventName = 'request'
    const request = null
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('should not change header', () => {
        const response = {
            setHeader: jest.fn().mockReturnThis()
        }
        const serverInstance = new originalHttp.Server()
        serverInstance.emit(eventName, request, response)
        expect(response.setHeader).not.toHaveBeenCalled()
    })

})