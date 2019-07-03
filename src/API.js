const ContactAPI = {
  contacts: [
    { id: 1, name: 'Ada Lovelace', image_url: 'https://picsum.photos/200', email: 'ada@gmail.com', phone_number: '123-555-1234' },
    { id: 2, name: 'Grace Hopper', image_url: 'https://picsum.photos/200', email: 'grace@gmail.com', phone_number: '123-555-1235' },
    { id: 3, name: 'Katherine Goble', image_url: 'https://picsum.photos/200', email: 'katherine@gmail.com', phone_number: '123-555-1236' },
    { id: 4, name: 'Mary Jackson', image_url: 'https://picsum.photos/200', email: 'mary@gmail.com', phone_number: '123-555-1237' },
    { id: 5, name: 'Dorothy Vaughan', image_url: 'https://picsum.photos/200', email: 'dorothy@gmail.com', phone_number: '123-555-1238' }
  ],
  all: function() {
    return this.contacts;
  },
  get: function(id) {
    const isContact = p => p.id === id;
    return this.contacts.find(isContact);
  }
};
