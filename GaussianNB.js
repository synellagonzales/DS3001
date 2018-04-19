var GaussianNB = function(priors, sigmas, thetas) {

    this.priors = priors;
    this.sigmas = sigmas;
    this.thetas = thetas;

    this.predict = function(features) {
        var likelihoods = new Array(this.sigmas.length);
    
        for (var i = 0, il = this.sigmas.length; i < il; i++) {
            var sum = 0.;
            for (var j = 0, jl = this.sigmas[0].length; j < jl; j++) {
                sum += Math.log(2. * Math.PI * this.sigmas[i][j]);
            }
            var nij = -0.5 * sum;
            sum = 0.;
            for (var j = 0, jl = this.sigmas[0].length; j < jl; j++) {
                sum += Math.pow(features[j] - this.thetas[i][j], 2.) / this.sigmas[i][j];
            }
            nij -= 0.5 * sum;
            likelihoods[i] = Math.log(this.priors[i]) + nij;
        }
    
        var classIdx = 0;
        for (var i = 0, l = likelihoods.length; i < l; i++) {
            classIdx = likelihoods[i] > likelihoods[classIdx] ? i : classIdx;
        }
        return classIdx;
    };

};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    if (process.argv.length - 2 === 10) {

        // Features:
        var features = process.argv.slice(2);

        // Parameters:
        var priors = [0.07747933884297521, 0.05165289256198347, 0.12086776859504132, 0.12706611570247933, 0.10330578512396695, 0.0743801652892562, 0.1952479338842975, 0.0743801652892562, 0.0640495867768595, 0.1115702479338843];
        var sigmas = [[0.011968209370742852, 0.027855889553047825, 0.0012717632012411641, 0.06222222245810826, 0.0010673465459352092, 0.04530298434616256, 2.630496129423239e-05, 0.010645827225470186, 0.05478300879915287, 0.04030074095030764], [0.01880734020542536, 0.017532479811062544, 0.0015608132598919815, 0.25000000023588614, 0.020883217065314333, 0.03679751466505834, 0.00016589809759006552, 0.0254079138082315, 0.03540563624769102, 0.027115051933234227], [0.02328080500989185, 0.024636160186007505, 0.002481029363142665, 0.24910512113587913, 0.018606945777249265, 0.05841995287458699, 0.0006879879674873628, 0.020044126915834497, 0.048702866234084256, 0.0403314735622898], [0.02218908221995945, 0.024106542001844658, 0.0016398377395816276, 0.23610284906925225, 0.0056017155888848195, 0.024042054150600154, 0.052607833104677044, 0.01723038412429044, 0.045310993640835136, 0.03396507606044342], [0.017696902151370167, 0.008892354914862396, 0.020244051044505933, 0.23040000023588617, 8.538624172065297e-05, 0.016676002760562744, 0.12010017201938249, 0.004446705943073948, 0.030656574807061868, 0.03987726131279795], [0.0206540221139852, 0.02154314732860562, 0.0012090277044421265, 0.24826388912477526, 0.005131107988898705, 0.014663333653393161, 0.03939820959195808, 0.02243159252490794, 0.04764364392176927, 0.03408567536157072], [0.017063293558794844, 0.01667223760597211, 0.002006204067225687, 0.24943310681185032, 0.03165408671333845, 0.028035161298197, 0.001957826209828828, 0.02163171357511268, 0.04234599460104178, 0.03212586193426137], [0.01944059966423524, 0.01995927365550955, 0.0022794423275825175, 0.24922839529761445, 0.006006846291748114, 0.023235442963578528, 0.07353290628387452, 0.02752873527361064, 0.058291155743423244, 0.01919860462067306], [0.015631136808330802, 0.03328611848858087, 0.0014891725663568663, 0.10015608764483513, 0.0013778318993679026, 0.04007462298078329, 0.00016776129581771976, 0.05295910457923375, 0.05237835264291579, 0.03419883252187206], [0.02040833469808001, 0.04324424260193319, 0.0036801986363034517, 0.21219135826057742, 0.002147775056935397, 0.11964131498143254, 0.06575029560826122, 0.012473822063573467, 0.040476300895315516, 0.02842053729995026]];
        var thetas = [[0.5263733477733332, 0.7383072412266665, 0.9107127693200001, 0.9333333333333333, 0.03241643324, 0.1892164312133333, 0.0007427664400000001, 0.14032228933333335, 0.5593765140266665, 0.49525320833333336], [0.70233568708, 0.6834914030400001, 0.8940388860000003, 0.5, 0.21650700288000008, 0.16824868855999997, 0.00263630436, 0.17773702850000003, 0.49868351761999996, 0.3939186694000001], [0.6425391254615387, 0.5899506413760685, 0.8731780229572648, 0.5299145299145299, 0.1243194713760684, 0.219054973974359, 0.004682532837606838, 0.1593841665641025, 0.516901833188034, 0.41503297745299134], [0.530734003707317, 0.7567251926504059, 0.9017371800975608, 0.6178861788617886, 0.059064926764227685, 0.0925375857886179, 0.09949463809756097, 0.17024718903252034, 0.4740535241300813, 0.44999392722764203], [0.19066376965999993, 0.09654215069999993, 0.5197313714999998, 0.64, 0.033005602220000006, 0.917650399, 0.50426733075, 0.10711502394000001, 0.12410215900000007, 0.3149361301399999], [0.46182630211111125, 0.8311131743888884, 0.9179634495138891, 0.5416666666666666, 0.06595082477777775, 0.056479869861111115, 0.0645789935138889, 0.16728745570833337, 0.43407348891666664, 0.4729788508333334], [0.7566654883597885, 0.6134241669947087, 0.8831529164550259, 0.5238095238095238, 0.2660545699788358, 0.15286562725925934, 0.006255260772486774, 0.1721368317936508, 0.4132350359735449, 0.45802158492063505], [0.6019071760277779, 0.7442431061805554, 0.8997284988888887, 0.4722222222222222, 0.06702264243055556, 0.1094938006111111, 0.1340537696944445, 0.20250601975, 0.37329881227777767, 0.47288483605555576], [0.47391845243548375, 0.6920608782096775, 0.8961093688548385, 0.8870967741935484, 0.034338574129032254, 0.13725101069354842, 0.0017768015483870967, 0.22718106596774199, 0.37080636672580636, 0.47163692453225814], [0.5331039893888889, 0.509882739509259, 0.8250989665740739, 0.6944444444444444, 0.02797748729629628, 0.452809131222222, 0.1400249932314815, 0.13453998904629627, 0.4194293293055558, 0.3852379678796296]];

        // Estimator:
        var clf = new GaussianNB(priors, sigmas, thetas);
        var prediction = clf.predict(features);
        console.log(prediction);

    }
}