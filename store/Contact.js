export default {
  heading: "Contact Page",
  main: `<main><div class="hero-image">
</div>
<form action="#" method="POST" data-netlify="true">
  <div class="flex-container--desktop flex-direction--row">
    <div class="inputarea">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" class="is-error is-correct"/>
    </div>
    <div class="inputarea">
      <label for="email">Email:</label>
      <input type="email" name="" id="email" class="is-error is-correct"/>
    </div>
    <div class="inputarea">
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" class="is-error is-correct"/>
    </div>
  </div>
  <div class="textarea">
    <label for="msg">Enter your message:</label>
    <textarea name="message" id="msg" cols="30" rows="10"></textarea>
  </div>

  <input type="submit" value="Submit" />
</form>
</main>`
}
