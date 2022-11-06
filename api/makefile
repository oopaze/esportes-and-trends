env = . .venv/bin/activate;
python = $(env) python
requirements_path = .devops/requirements.txt

clean:
	rm -rf .venv | echo "no .venv found"

build: clean
	python3.8 -m pip install virtualenv
	python3.8 -m virtualenv .venv
	$(python) -m pip install -r $(requirements_path)

start:
	$(env) flask run
