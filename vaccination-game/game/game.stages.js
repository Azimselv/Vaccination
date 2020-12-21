/**
 * # Game stages definition file
 * Copyright(c) 2020 [C:\Users\admin\Downloads\nodegame-v5.11.0 <\]>
 * MIT Licensed
 *
 * Stages are defined using the stager API
 *
 * http://www.nodegame.org
 * ---
 */

module.exports = function(stager, settings) {

    stager
        .next('introduction')
        .next('desease')
        .next('treat')
        .next('quiz')
        .repeat('game', settings.ROUNDS)
        .step('vaccination')
        .step('response')
        .next('opend')
        .next('demographics')
        .next('politics')
        .next("health")
        .next('risk')
        .next('end')
        .gameover();
    // Modify the stager to skip one stage.
    // stager.skip('instructions');

    // To skip a step within a stage use:
    // stager.skip('stageName', 'stepName');
    // Notice: here all stages have just one step.
};
