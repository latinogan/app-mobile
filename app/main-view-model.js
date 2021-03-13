const Observable = require("@nativescript/core").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlockED G-TANG! YOU ARE A PLAYER";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    const viewModel = new Observable();
    viewModel.counter = 10;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = () => {
        viewModel.counter--;
        viewModel.set("message", getMessage(viewModel.counter));
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
