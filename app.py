from flask import Flask, render_template ,url_for,redirect,request,session,flash

app = Flask(__name__)


@app.route('/')
def homee():
    return render_template('comingsoon.html')

"""
@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/photos')
def docs():
    return render_template('photos.html')


@app.route('/about')
def about():
    return render_template('')



@app.route('/hello-there!!')
def hello_there():
    return render_template('hellothere.html')
"""
@app.errorhandler(404)
def page_not_found(error):    
    return render_template('page_not_found.html'), 404


if __name__ == "__main__":    
    app.run(debug=True)
    
