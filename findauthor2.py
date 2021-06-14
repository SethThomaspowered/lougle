import pandas as pd
import numpy as np
from flask import Flask
app = Flask(__name__)
little =pd.read_csv('louisvillelittlelibrary1.csv')
def find_author():
    res = input("Enter author's name, book title, or genre? \n")
    littleres = little[(little['authorname'] == res) 
                       | (little['authorfirstname'] == res) 
                       | (little['authorlastname'] == res) | (little['book_title'] == res) | (little['agerange'] == res) | (little['Type'] == res) 
                       | (little['category'] == res)]
    print (littleres[['authorname','book_title', 'address']])
    return littleres
find_author()