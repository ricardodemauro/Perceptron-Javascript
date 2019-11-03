function sign(num) {  
    return num >= 0 ? 1 : -1;
}

class Perceptron {
    weights = [];
    lr = 0.1;

    constructor(numberWeigths) {
        this.weights = new Array(numberWeigths);

        for(let i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1, 1)
        }
    }  

    guess(inputs) {
        let sum = 0;

        for(let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }

        let output = sign(sum);
        return output;
    }

    train(inputs, target) {
        const guess = this.guess(inputs);

        const error = target - guess;

        for(let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i] * this.lr;
        }
    }

    guessY(x) {
        const w0 = this.weights[0];
        const w1 = this.weights[1];
        const w2 = this.weights[2];
    
        return -(w2 / w1) - (w0 / w1) * x;
    }
}