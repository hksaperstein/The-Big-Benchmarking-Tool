class Module{
    constructor(code=null,title=null, description=null, numSDG=0, SDGs=[]) {
        this.code = code;
        this.title = title;
        this.description = description;
        this.numSDG = numSDG;
        this.SDGs = SDGs;
    }

    getCode() {
        return this.code;
    }
    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }
    getNumSDG() {
        return this.numSDG;
    }
    getSDGs() {
        return this.SDGs;
    }

    setCode(code) {
         this.code = code;
    }
    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }

    setNumSDG(numSDG) {
        this.numSDG = numSDG;
    }
    setSDGs(SDGs) {
        this.SDGs = SDGs;
    }
}

function parse_csv(){

    let fileUpload = document.getElementById("curriculum_file");

    let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;


    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            let reader = new FileReader();
            reader.onload = function (e) {
                let modules = [];

                let rows = e.target.result.split("\n");

                for(let i = 1; i < rows.length; i++) {
                    let cols = rows[i].split(",");
                    if (cols[4] < 4 && cols[3] !== "N") {
                        let module = new Module();
                        module.setCode(cols[0]);
                        module.setTitle(cols[1]);
                        module.setDescription(cols[2]);
                        modules.push(module);
                    }// console.log(modules);
                }
                parse_keywords(modules)

            };
            reader.readAsText(fileUpload.files.item(0));


        }

    }else{
        alert("Please upload a valid .csv file")
    }
    // console.log(modules)


}

function parse_keywords(modules){

    let keywordList = ["\\bDeveloping Countries", "Economic Resources", "Equality", "Financial Inclusion",
        "Income Equality", "Inequality", "Overuse Of Resource", "Poverty", "Quality Of Life", "Resource Efficiency",
        "Resource Overuse", "Third World", "Vulnerable", "Wealth Distribution", "Consumption of Resources", "Food Gap",
        "Food Reserves", "Food Security", "Hunger", "Hungry People", "Malnutrition", "Nutrition", "Resource Consumption",
        "Rural Infrastructure", "Sustainable Agriculture", "Air Contamination", "Air Pollution", "Child Deaths", "Clean Water",
        "Disability", "Healthy Living", "International Health Policy", "International Health Regulations", "Reducing Malaria",
        "Reducing Mortality", "Soil Contamination", "Soil Pollution", "Treatment Of Substance Abuse", "Well Being", "Wellbeing",
        "Well-Being", "Access To Education", "Basic Literacy", "Equal Education", "Equitable Education", "Gender Disparities In Education",
        "Gender Disparity", "Gender Equality", "Gender Equity", "Gender Sensitive", "Inclusive Education", "Opportunities For All",
        "Refugees And Learning", "Universal Education", "Disadvantaged", "Discrimination", "Empower women", "Empowering Girls",
        "Empowering Women", "Empowerment Of Girls", "Empowerment Of Women", "Equal Access", "Exploitation", "Female Empowerment",
        "Female Genital Mutilation", "Feminism", "Forced Marriage", "Gender Discrimination", "Gender equality", "Human Rights",
        "Human Trafficking", "Humanitarian", "Marginalised", "Reproductive Health", "Reproductive Rights", "Sexual Health",
        "Sexual Violence", "Social Inclusion", "Unemployment", "Universal Health Coverage", "Violence Against Girls", "Violence Against Women",
        "Women Empowerment", "Women’s Rights", "Workplace Equality", "Accessible Water", "Affordable Drinking Water", "Contaminated",
        "Contamination", "Ecosystem Protection", "Ecosystem Restoration", "Equitable Sanitation", "Hydropower", "Improving Water",
        "Inadequate Water", "Pollution", "Recycle", "Safe Drinking Water", "Sanitation", "Water Access", "Water Disasters",
        "Water Ecosystems", "Water Efficiency", "Water Harvesting", "Water Quality", "Water Resources Management", "Water Scarcity",
        "Water Supply", "Water-related Ecosystems", "Water-use Efficiency", "Affordable Energy", "Alternative Energy", "Fossil Fuel",
        "Fossil-fuel", "Green Economy", "Greenhouse Gas", "Greenhouse Gas Emissions", "Hydroelectric", "Low Carbon", "Reliable Energy",
        "Renewable", "Solar Energy", "Solar Power", "Sustainable Energy", "Wave Energy", "Wave Power", "Wind Energy", "Wind Power",
        "Decent Work", "Economic growth", "Equal Pay", "Global Resource Efficiency", "Productive employment", "Sustainable Economic Growth",
        "Sustainable Growth", "Foster innovation", "Infrastructure", "Resilient Infrastructure", "Resource Use Efficiency",
        "Sustainable Industrialization", "Water Resources", "Ageism", "Discriminatory", "Equal Opportunity", "Racism", "Reduce Inequality",
        "Sexism", "Classism", "Air Quality", "Climate Change", "Disaster Management", "Disaster Risk Reduction", "Human settlements",
        "Inadequate Housing", "Inclusive Cities", "Inclusive human Settlements", "Land Consumption", "Resource Needs", "Smart Cities",
        "Waste Generation", "Waste Management", "Decarbonisation", "Efficient Use Of Resources", "Energy Consumption", "Energy Efficiency",
        "Energy Use", "Food Losses", "Food Supply", "Food Waste", "Future Proof", "Greenhouse Gasses", "Natural Resources",
        "Productive Patterns", "Recycling", "Reduce Waste Generation", "Reduction", "Sustainable Consumption", "Water Pollution",
        "Climate Action", "Climate change", "Climate Change Planning", "Climate Change Policy", "Cop 21", "Cop 22", "Emissions",
        "Extreme Weather", "Global Mean Temperature", "Global Temperature", "Global Warming", "Greenhouse Gases", "Ice Loss",
        "Low-carbon Economy", "Ocean Systems", "Paris Agreement", "Rising Sea", "Sea Level Rise", "Conservation", "Conserve",
        "Conserve Oceans", "Ecosystem Management", "Marine", "Ocean Acidification", "Ocean Temperature", "Oceans", "Protected Areas",
        "Seas", "Sustainable Oceans", "Biodiversity", "Deforestation", "Desertification", "Desertifications", "Ecosystems",
        "Illegal Wildlife Products", "Land Conservation", "Land Degradation", "Land Loss", "Land Use And Sustainability", "Manage Forests",
        "Protected Fauna", "Protected Flora", "Protected Species", "Reforestation", "Soil Degradation", "Terrestrial Ecosystems",
        "Threatened Species", "Access to Justice", "Accountable Institutions", "Hate Crime", "Inclusive Institutions", "Inclusive Societies",
        "Peace", "Peaceful Societies", "Doha Development Agenda", "Environmentally Sound Technologies", "Global Partnership",
        "Global Partnerships For Sustainable Development", "International Cooperation", "International Support", "Poverty Eradication",
        "Sustainability", "Sustainable", "Women Entrepreneurs", "Active Lifestyle", "Adolescent Development", "Baby Development",
        "Child Development", "Consumption of Fossil Fuel", "Consumption Of Natural Resource", "Consumption Of Resource", "Ecological System",
        "Economic Instability", "Economic Sustainability", "Education Sector", "Enabling Environments", "Environmental Assessment",
        "Environmental Degradation", "Environmental Issue", "Environmental Policy", "Environmental Sustainability",
        "Environmentally Sensitive", "Environmentally-sensitive", "Equal Rights To Economic Resources", "Future Policy",
        "Habitat Quality", "Human Well-being", "Impoverished", "Inclusion", "Justice Legislation", "Justice Sector", "Land Use",
        "Marginalization", "Mental Health", "Natural Environment", "Natural Hazards", "Poverty Reduction", "Resource Management",
        "Safe Communities", "SDG", "Segregation", "Social Sustainability", "Special Education", "Supporting Families",
        "Sustainable Development", "Sustainable Education", "Sustainable Livelihood", "Vulnerable Species", "Women Equality","Women Rights\\b"];

    let sdg1Keywords = ["\\bDeveloping Countries", "Economic Resources", "Equality", "Financial Inclusion",
        "Income Equality", "Inequality", "Overuse Of Resource", "Poverty", "Quality Of Life", "Resource Efficiency",
        "Resource Overuse", "Third World", "Vulnerable", "Wealth Distribution", "Impoverished", "Poverty Reduction\\b"];
    let sdg2Keywords = ["\\bConsumption of Resources", "Food Gap",
        "Food Reserves", "Food Security", "Hunger", "Hungry People", "Malnutrition", "Nutrition", "Resource Consumption",
        "Rural Infrastructure", "Sustainable Agriculture\\b"];
    let sdg3Keywords = ["\\bAir Contamination", "Air Pollution", "Child Deaths", "Clean Water",
        "Disability", "Healthy Living", "International Health Policy", "International Health Regulations", "Reducing Malaria",
        "Reducing Mortality", "Soil Contamination", "Soil Pollution", "Treatment Of Substance Abuse", "Well Being", "Wellbeing",
        "Well-Being", "Active Lifestyle", "Adolescent Development", "Baby Development", "Child Development", "Mental Health", "Sustainable Livelihood\\b"];
    let sdg4Keywords = ["\\bAccess To Education", "Basic Literacy", "Equal Education", "Equitable Education", "Gender Disparities In Education",
        "Gender Disparity", "Gender Equality", "Gender Equity", "Gender Sensitive", "Inclusive Education", "Opportunities For All",
        "Refugees And Learning", "Universal Education", "Education Sector", "Special Education", "Sustainable Education\\b"];
    let sdg5Keywords = ["\\bDisadvantaged", "Discrimination", "Empower women", "Empowering Girls",
        "Empowering Women", "Empowerment Of Girls", "Empowerment Of Women", "Equal Access", "Exploitation", "Female Empowerment",
        "Female Genital Mutilation", "Feminism", "Forced Marriage", "Gender Discrimination", "Gender equality", "Human Rights",
        "Human Trafficking", "Humanitarian", "Marginalised", "Reproductive Health", "Reproductive Rights", "Sexual Health",
        "Sexual Violence", "Social Inclusion", "Unemployment", "Universal Health Coverage", "Violence Against Girls", "Violence Against Women",
        "Women Empowerment", "Women’s Rights", "Workplace Equality", "Women equality", "Women Rights\\b"];
    let sdg6Keywords = ["\\bAccessible Water", "Affordable Drinking Water", "Contaminated",
        "Contamination", "Ecosystem Protection", "Ecosystem Restoration", "Equitable Sanitation", "Hydropower", "Improving Water",
        "Inadequate Water", "Pollution", "Recycle", "Safe Drinking Water", "Sanitation", "Water Access", "Water Disasters",
        "Water Ecosystems", "Water Efficiency", "Water Harvesting", "Water Quality", "Water Resources Management", "Water Scarcity",
        "Water Supply", "Water-related Ecosystems", "Water-use Efficiency\\b"];
    let sdg7Keywords = ["\\bAffordable Energy", "Alternative Energy", "Fossil Fuel",
        "Fossil-fuel", "Green Economy", "Greenhouse Gas", "Greenhouse Gas Emissions", "Hydroelectric", "Low Carbon", "Reliable Energy",
        "Renewable", "Solar Energy", "Solar Power", "Sustainable Energy", "Wave Energy", "Wave Power", "Wind Energy", "Wind Power", "Energy Efficiency\\b"];
    let sdg8Keywords = ["\\bDecent Work", "Economic growth", "Equal Pay", "Global Resource Efficiency", "Productive employment", "Sustainable Economic Growth",
        "Sustainable Growth", "Economic Instability", "Economic Sustainability", "Equal Rights to Economic Resource\\b"];
    let sdg9Keywords = ["\\bFoster innovation", "Infrastructure", "Resilient Infrastructure", "Resource Use Efficiency",
        "Sustainable Industrialization", "Water Resources\\b"];
    let sdg10Keywords = ["\\bAgeism", "Discriminatory", "Equal Opportunity", "Racism", "Reduce Inequality",
        "Sexism", "Classism", "Human Rights", "Inclusion", "Marginalization", "Segregation", "Social Inclusion\\b"];
    let sdg11Keywords = ["\\bAir Quality", "Climate Change", "Disaster Management", "Disaster Risk Reduction", "Human settlements",
        "Inadequate Housing", "Inclusive Cities", "Inclusive human Settlements", "Land Consumption", "Resource Needs", "Smart Cities",
        "Waste Generation", "Waste Management", "Habitat Quality\\b"];
    let sdg12Keywords = ["\\bDecarbonisation", "Efficient Use Of Resources", "Energy Consumption", "Energy Efficiency",
        "Energy Use", "Food Losses", "Food Supply", "Food Waste", "Future Proof", "Greenhouse Gasses", "Natural Resources",
        "Productive Patterns", "Recycling", "Reduce Waste Generation", "Reduction", "Sustainable Consumption", "Water Pollution", "Alternative Energy",
        "Consumption of Fossil Fuels", "Consumption of Natural Resource", "Consumption of Resource", "Recycling", "Resource Management\\b"];
    let sdg13Keywords = ["\\bClimate Action", "Climate change", "Climate Change Planning", "Climate Change Policy", "Cop 21", "Cop 22", "Emissions",
        "Extreme Weather", "Global Mean Temperature", "Global Temperature", "Global Warming", "Greenhouse Gases", "Ice Loss",
        "Low-carbon Economy", "Ocean Systems", "Paris Agreement", "Rising Sea", "Sea Level Rise", "Natural Hazards", "Pollution\\b"];
    let sdg14Keywords = ["\\bConservation", "Conserve",
        "Conserve Oceans", "Ecosystem Management", "Marine", "Ocean Acidification", "Ocean Temperature", "Oceans", "Protected Areas",
        "Seas", "Sustainable Oceans", "Vulnerable Species\\b"];
    let sdg15Keywords = ["\\bBiodiversity", "Deforestation", "Desertification", "Desertifications", "Ecosystems",
        "Illegal Wildlife Products", "Land Conservation", "Land Degradation", "Land Loss", "Land Use And Sustainability", "Manage Forests",
        "Protected Fauna", "Protected Flora", "Protected Species", "Reforestation", "Soil Degradation", "Terrestrial Ecosystems",
        "Threatened Species", "Ecological System", "Enabling Environment", "Environmental Assessment", "Environmental Degradation",
        "Environmental Issue", "Environmental Sustainability", "Environmentally Sensitive", "Environmentally-Sensitive", "Land use",
        "Natural Environment\\b"];
    let sdg16Keywords = ["\\bAccess to Justice", "Accountable Institutions", "Hate Crime", "Inclusive Institutions", "Inclusive Societies",
        "Peace", "Peaceful Societies", "Justice Legislation", "Justice Sector", "Safe Communities", "Supporting Families\\b"];
    let sdg17Keywords = ["\\bDoha Development Agenda", "Environmentally Sound Technologies", "Global Partnership",
        "Global Partnerships For Sustainable Development", "International Cooperation", "International Support", "Poverty Eradication",
        "Sustainability", "Sustainable", "Women Entrepreneurs", "Future Policy", "SDG", "Social Sustainability", "Sustainable Development",
        "Environmental Policy\\b"];


    let keywordRegex = new RegExp(keywordList.join('\\b|\\b'), 'giu');
    let sdg1Regex = new RegExp(sdg1Keywords.join('\\b|\\b'), 'giu');
    let sdg2Regex = new RegExp(sdg2Keywords.join('\\b|\\b'), 'giu');
    let sdg3Regex = new RegExp(sdg3Keywords.join('\\b|\\b'), 'giu');
    let sdg4Regex = new RegExp(sdg4Keywords.join('\\b|\\b'), 'giu');
    let sdg5Regex = new RegExp(sdg5Keywords.join('\\b|\\b'), 'giu');
    let sdg6Regex = new RegExp(sdg6Keywords.join('\\b|\\b'), 'giu');
    let sdg7Regex = new RegExp(sdg7Keywords.join('\\b|\\b'), 'giu');
    let sdg8Regex = new RegExp(sdg8Keywords.join('\\b|\\b'), 'giu');
    let sdg9Regex = new RegExp(sdg9Keywords.join('\\b|\\b'), 'giu');
    let sdg10Regex = new RegExp(sdg10Keywords.join('\\b|\\b'), 'giu');
    let sdg11Regex = new RegExp(sdg11Keywords.join('\\b|\\b'), 'giu');
    let sdg12Regex = new RegExp(sdg12Keywords.join('\\b|\\b'), 'giu');
    let sdg13Regex = new RegExp(sdg13Keywords.join('\\b|\\b'), 'giu');
    let sdg14Regex = new RegExp(sdg14Keywords.join('\\b|\\b'), 'giu');
    let sdg15Regex = new RegExp(sdg15Keywords.join('\\b|\\b'), 'giu');
    let sdg16Regex = new RegExp(sdg16Keywords.join('\\b|\\b'), 'giu');
    let sdg17Regex = new RegExp(sdg17Keywords.join('\\b|\\b'), 'giu');



    let sdg_count = {
        "module_count": 0,
        "sustainability_count": 0,
        "modulesW1": 0,
        "modulesW2": 0,
        "modulesW3": 0,
        "sdg1": 0,
        "sdg2": 0,
        "sdg3": 0,
        "sdg4": 0,
        "sdg5": 0,
        "sdg6": 0,
        "sdg7": 0,
        "sdg8": 0,
        "sdg9": 0,
        "sdg10": 0,
        "sdg11": 0,
        "sdg12": 0,
        "sdg13": 0,
        "sdg14": 0,
        "sdg15": 0,
        "sdg16": 0,
        "sdg17": 0
    };
    let sdg_codes = {
        "mult2": [],
        "mult3": [],
        "sdg1": [],
        "sdg2": [],
        "sdg3": [],
        "sdg4": [],
        "sdg5": [],
        "sdg6": [],
        "sdg7": [],
        "sdg8": [],
        "sdg9": [],
        "sdg10": [],
        "sdg11": [],
        "sdg12": [],
        "sdg13": [],
        "sdg14": [],
        "sdg15": [],
        "sdg16": [],
        "sdg17": [],
    };

    for(let i = 0; i < modules.length; i++){

        let module = modules[i];
        sdg_count.module_count += 1;
        if(keywordRegex.test(module.description) | keywordRegex.test(module.title)){
            sdg_count.sustainability_count += 1;
        }

        if(sdg1Regex.test(module.description) | sdg1Regex.test(module.title)){
            sdg_count.sdg1 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG1");
            sdg_codes.sdg1.push(module)
        }
        if(sdg2Regex.test(module.description) | sdg2Regex.test(module.title)){
            sdg_count.sdg2 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG2");
            sdg_codes.sdg2.push(module)
        }
        if(sdg3Regex.test(module.description) | sdg3Regex.test(module.title)){
            sdg_count.sdg3 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG3");
            sdg_codes.sdg3.push(module)
        }
        if(sdg4Regex.test(module.description) | sdg4Regex.test(module.title)){
            sdg_count.sdg4 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG4");
            sdg_codes.sdg4.push(module)
        }
        if(sdg5Regex.test(module.description) | sdg5Regex.test(module.title)){
            sdg_count.sdg5 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG5");
            sdg_codes.sdg5.push(module)
        }
        if(sdg6Regex.test(module.description) | sdg6Regex.test(module.title)){
            sdg_count.sdg6 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG6");
            sdg_codes.sdg6.push(module)
        }

        if(sdg7Regex.test(module.description) | sdg7Regex.test(module.title)) {
            sdg_count.sdg7 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG7");
            sdg_codes.sdg7.push(module)
        }
        if(sdg8Regex.test(module.description) | sdg8Regex.test(module.title)){
            sdg_count.sdg8 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG8");
            sdg_codes.sdg8.push(module)
        }
        if(sdg9Regex.test(module.description) | sdg9Regex.test(module.title)){
            sdg_count.sdg9 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG9");
            sdg_codes.sdg9.push(module)
        }
        if(sdg10Regex.test(module.description) | sdg10Regex.test(module.title)){
            sdg_count.sdg10 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG10");
            sdg_codes.sdg10.push(module)
        }
        if(sdg11Regex.test(module.description) | sdg11Regex.test(module.title)){
            sdg_count.sdg11 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG11");
            sdg_codes.sdg11.push(module)
        }
        if(sdg12Regex.test(module.description) | sdg12Regex.test(module.title)){
            sdg_count.sdg12 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG12");
            sdg_codes.sdg12.push(module)
        }

        if(sdg13Regex.test(module.description) | sdg13Regex.test(module.title)){
            sdg_count.sdg13 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG13");
            sdg_codes.sdg13.push(module)
        }

        if(sdg14Regex.test(module.description) | sdg14Regex.test(module.title)){
            sdg_count.sdg14 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG14");
            sdg_codes.sdg14.push(module)
        }
        if(sdg15Regex.test(module.description) | sdg15Regex.test(module.title)){
            sdg_count.sdg15 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG15");
            sdg_codes.sdg15.push(module)
        }
        if(sdg16Regex.test(module.description) | sdg16Regex.test(module.title)){
            sdg_count.sdg16 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG16");
            sdg_codes.sdg16.push(module)
        }
        if(sdg17Regex.test(module.description) | sdg17Regex.test(module.title)){
            sdg_count.sdg17 += 1;
            module.numSDG += 1;
            module.SDGs.push("SDG17");
            sdg_codes.sdg17.push(module)
        }





    }
    console.log(sdg_count.sustainability_count);
    console.log(sdg_count.module_count);
    console.log(sdg_count);
    console.log(sdg_codes);






}