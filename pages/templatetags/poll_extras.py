from django import template

from googletrans import Translator
from bs4 import BeautifulSoup

register = template.Library()

def trans_html(value, arg):
    # Parse the HTML content
    soup = BeautifulSoup(value, 'html.parser')

    # Get text content for translation
    text_to_translate = ' '.join([p.text for p in soup.find_all('p')])

    # Translate the text
    translator = Translator()
    translated_text = translator.translate(text_to_translate, src="uz", dest=arg).text

    # Update the HTML content with the translated text
    for p in soup.find_all('p'):
        p.string = ' '.join(translated_text.split(' ', len(p.text.split()))[:len(p.text.split())])

    # Get the translated HTML content
    translated_html_content = str(soup)
    return translated_html_content

def trans_text(value, arg):
    trans = Translator()
    rt = trans.translate(text=value, dest=arg, src='uz').text
    return rt

register.filter('trans_text', trans_text)
register.filter('trans_html', trans_html)
