from flask import Flask, render_template

# Configure application
app = Flask(__name__)
app.debug = True

@app.route("/")
def index():
    """Test if this crap works"""
    return render_template("index.html")