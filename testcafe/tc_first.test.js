import { Selector, t } from 'testcafe'

fixture `homePage` .page `http://localhost:3001`

test('The app has main <div> styled as App class', async t => {
  await t
    .expect(Selector('#root>div').hasClass('App')).ok()
})

test('The main <div> should not have any <Person> children div\'s by default', async t => {
  await t
    .expect(Selector('#root>div').child('.Person').count).eql(0)
})

test('"Toggle Person list" button is present', async t => {
  await t
    .expect(Selector('#personToggler').exists).ok()
    .expect(Selector('#personToggler').textContent).contains('Toggle Persons list')
})

const App2DivDown = Selector('.App>div div')

test('The main <div> has 3 <div> children styled with Person class', async t => {
  await t
    .click('#personToggler')
    .expect(App2DivDown.hasClass('Person')).ok()
    .expect(App2DivDown.count).eql(3)
})

test('Click on on the middle text of the second card removes the second card', async t => {
  // second card
  let targetDiv = 1
  // second paragraph
  let clickableP = 1
  
  let cardTwo = Selector( index => {
    let obj = document.querySelectorAll('.App>div>.Person')
    let arr = Array.prototype.slice.call(obj)

    return arr[index]
  })
  
  await t.click('#personToggler')

  let set = await cardTwo(targetDiv).getAttribute('id')

  await t
    .click(cardTwo(targetDiv).child(clickableP))
    .expect(Selector('.App>div>.Person').withAttribute('id', ''+set).count).eql(0)
})
