env = . .venv/bin/activate;
python = $(env) python
requirements_path = ./api/.devops/requirements.txt

clean:
	rm -rf .venv | echo "no .venv found"

build_prod:
	python3.8 -m pip install -r requirements.txt
	source ./run.sh

build_dev: clean
	python3.8 -m pip install virtualenv
	python3.8 -m virtualenv .venv
	$(python) -m pip install -r $(requirements_path)

start:
	cd api; $(env) flask run
