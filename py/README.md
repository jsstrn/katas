## Install Python 3

Make sure you have Python 3.x installed. 

Install `pyenv` to manage different versions of Python

```
brew install pyenv
```

Install the latest version of Python

```sh
pyenv install <python-version>
```

Set that version as global

```sh
pyenv global <python-version>
```

Add this to your `.zshrc` file

```
export PATH=$(pyenv root)/shims:$PATH
```

Check your Python version

```sh
python --version
```

## Run tests

To run a single test file 

```sh
python -m unittest <your_test_file_name>
```

To run all test files 

```sh
python -m unittest discover
```
