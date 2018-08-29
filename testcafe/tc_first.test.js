import { Selector } from 'testcafe'

fixture `homePage` .page `http://localhost:3001`

test ('The app has main <div> styled as App class', async t => {
  await t
    .expect(Selector('#root>div').withAttribute('class', 'App'))
})

test ('The main <div> should not have any <Person> children div\'s by default', async t => {
  await t
    .expect(Selector('#root>div').child('.Person').count).eql(0)
})

test ('"Toggle Person list" button is present', async t => {
  await t
    .expect(Selector('#personToggler').exists).ok()
    .expect(Selector('#personToggler').textContent).contains('Toggle Persons list')
})

const AppDiv = Selector('#root>.App>div')

test.only ('The main <div> has 3 <div> children styled with Person class', async t => {
  await t
    .click('#personToggler')
    .expect(AppDiv.child('div').count).eql(3)
})

