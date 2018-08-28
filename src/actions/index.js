 export default function selectBook(book) {
   // selecBook is an action creator and needs to return an action,
   // an object with a typed property
  return {
      type: 'BOOK_SELECTED',
      payload: book
  }
}
