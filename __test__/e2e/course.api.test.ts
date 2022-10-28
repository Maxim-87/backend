import request from 'supertest';
import {app} from '../../src/index';
import {HTTP_STATUSES} from '../../src/index';

describe('/course', () => {

  beforeAll(async () => {
    await request(app)
      .delete('/__test__/data')
  })

  it('should return 200 and empty array',async () => {
    await request(app)
      .get('/address')
      .expect(HTTP_STATUSES.OK_200, [])
  })

  it('should return 404 not existing course',async () => {
    await request(app)
      .get('/address/1')
      .expect(HTTP_STATUSES.NOT_FOUND_404)
  })

  it('should create course',async () => {
    await request(app)
      .post('/address')
      .send({title: ''})
      .expect(HTTP_STATUSES.NOT_FOUND_404)
  })



})