from flask import Flask, render_template
import sqlite3 as sql 


app = Flask(__name__)


@app.route('/')
def index():

    """db connection"""
    con = sql.connect("duckhacks2018.db")
    cur = con.cursor()
    query = " select C.category_name, E.expected_value, A.actual, A.comment from Actual_Spendings as A join Category as C on A.category_id = C.category_id  join Expected_Spendings as E on A.category_id = E.category_id and A.user_id = E.user_id where A.month = 1 and A.user_id = 2"

    cur.execute(query)
    rows = cur.fetchall()
    data = [{'category_name': category_name, 'expected_value': expected_value, 'actual': actual, 'comment':comment} for category_name, expected_value, actual, comment in rows]
    con.close()
    print(rows)
    return render_template('index.html', data=data)


if __name__ == "__main__":
    app.run(debug=True)