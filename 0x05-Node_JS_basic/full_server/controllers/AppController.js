/**
 * Contains the miscellaneous route handlers.
 * @author Amirou DIALLO <https://github.com/amiroudiallo-dev>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
