import {
  Component,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss']
})
export class SelectSearchSectionComponent extends AbstractSectionComponent {

  public data1: Object[];

  constructor(protected route: ActivatedRoute) {
    super(route);
    /* tslint:disable */
    this.data1 = [
      {
        'id': 86,
        'name': '1E_Amusement park visitors with 2+ children'
      },
      {
        'id': 83,
        'name': '3E_Outstanding Cars Designed for Dogs and Their Humans'
      },
      {
        'id': 3,
        'name': '2E_How to Feed a Large Family Real Food on a Budget'
      },
      {
        'id': 163,
        'name': '2E - Smart Investors and Credit Cards Owners'
      },
      {
        'id': 1040,
        'name': 'Active Investors-stella'
      },
      {
        'id': 1064,
        'name': 'test'
      },
      {
        'id': 738,
        'name': 'Subaru Dog Friendly Car-6Attributes: Dog Owner | Domestic Traveler | Interest in Travel | Interest in Automotive |Purchase via Online | Credit Card User'
      },
      {
        'id': 741,
        'name': 'Young Drivers'
      },
      {
        'id': 181,
        'name': '5E_snapshot view2'
      },
      {
        'id': 5,
        'name': '2E_Family Welness Programs Family Welness ProgramsFamilyWelness ProgramsFamilyWelnessProgramsFamilyWelnessProgramsFWelnessProgramsdfgdfgdfgdfgdfgdfgdf WelnessProgramsdfgdfgdfgdfgdfgdfgdf WelnessProgramsdfgdfgdfgdfgdfgdfgdf WelnessProgramsdfgdfgdfgdfgdfgdfgdf WelnessProgramsdfgdfgdfgdfgdfgdfgdf'
      },
      {
        'id': 31,
        'name': '2E_Families with a High Credit Scores'
      },
      {
        'id': 4,
        'name': '2E_Healthy Living and Eating for Big Families'
      },
      {
        'id': 21,
        'name': '1E_Dow Owners who drive BMW with High credit score'
      },
      {
        'id': 174,
        'name': '6 Attributes - smart investors who are credit card owners'
      },
      {
        'id': 149,
        'name': '5 Attributes - smart investors who are credit card owners'
      },
      {
        'id': 112,
        'name': 'Audience% in venn box'
      },
      {
        'id': 7,
        'name': '2E_Outstanding Cars Designed for Dogs and Their Humans'
      },
      {
        'id': 20,
        'name': '1E_High credit score customer with yearly budget of 100Kand more and even more much more High credit score customer with yearly budget of 100Kand more and even more much more'
      },
      {
        'id': 1363,
        'name': 'Benefits of Animals to Humans-2'
      },
      {
        'id': 739,
        'name': 'Active Invesstors'
      },
      {
        'id': 1271,
        'name': 'Subaru Dog Friendly Car'
      },
      {
        'id': 162,
        'name': '5E-Healthy Life style supporters1'
      },
      {
        'id': 14,
        'name': '1E_st-2 conditions: for this condition we have to build 1 audience with 1 expression, which includes 2 attributes'
      },
      {
        'id': 114,
        'name': 'Avid Runners who drive Acura_MDX'
      },
      {
        'id': 115,
        'name': '2 identical expressions'
      },
      {
        'id': 79,
        'name': '3E_Size of the Venn boxes'
      },
      {
        'id': 207,
        'name': 'women live on East Cost and Avid Runners'
      },
      {
        'id': 164,
        'name': '1233'
      },
      {
        'id': 391,
        'name': 'Healthy Living and Eating for Big Families1'
      },
      {
        'id': 390,
        'name': 'How to Feed a Large Family Real Food on a Budget'
      },
      {
        'id': 189,
        'name': '6E_Cat owners, who live a Healthy live style AND play golf NOT own a Dog'
      },
      {
        'id': 8,
        'name': '1E_Apple Ipod/Iphone Owners, who drive BMW'
      },
      {
        'id': 229,
        'name': 'How to feed a Large Family on a Budget'
      },
      {
        'id': 176,
        'name': '2E_Attributes - smart investors who are credit card owners1'
      },
      {
        'id': 91,
        'name': 'Copy of 1E_Dog owners who drive BMW'
      },
      {
        'id': 87,
        'name': 'Copy of BMW drivers who play golf123456'
      },
      {
        'id': 93,
        'name': '2E_Families with a High Credit Scores_TOTAL0'
      },
      {
        'id': 84,
        'name': 'Copy of 1E_Dow Owners who drive BMW with High credit score'
      },
      {
        'id': 211,
        'name': 'promote educational games for kids'
      },
      {
        'id': 2,
        'name': '1E_Dog owners who work full time Dog owners who work full time Dog owners who work full time Dog owners who work full time Dog owners who work full timeDog owners who work full time Dog owners who work full time'
      },
      {
        'id': 9,
        'name': '5E_Promote healthy Living for Children and Families1'
      },
      {
        'id': 486,
        'name': '1New concept of the CARs  for Dog Owners. Dog owners should own a Credit car.Dog owners should maintain a healthy living. Dog owners should be a Cruise entusiasts.Dog Owners must have a retirement financial plan.'
      },
      {
        'id': 519,
        'name': 'blerg'
      },
      {
        'id': 196,
        'name': '2Positive_1Negative'
      },
      {
        'id': 180,
        'name': '2E_Attributes2 - smart investors who are credit card owners1'
      },
      {
        'id': 96,
        'name': '2nd Copy of BMW drivers who play golf1'
      },
      {
        'id': 98,
        'name': 'Eats at Fast Food Restaurants Avid runners'
      },
      {
        'id': 173,
        'name': '5E_snapshot view'
      },
      {
        'id': 182,
        'name': '5E_snapshot view311'
      },
      {
        'id': 71,
        'name': '1E_CATOWNERS, who live a Healthy live style AND PLAY golf NOT own a Dog'
      },
      {
        'id': 99,
        'name': 'Copy of Eats at Fast Food Restaurants Avid runners'
      },
      {
        'id': 183,
        'name': 'Copy of 5E_snapshot view4'
      },
      {
        'id': 101,
        'name': '2nd Copy of Eats at Fast Food Restaurants Avid runners'
      },
      {
        'id': 184,
        'name': 'three expressions, one is zero reach'
      },
      {
        'id': 185,
        'name': 'five expressions, one is zero reach'
      },
      {
        'id': 58,
        'name': '4E_Cat owners, who live a Healthy live style AND play golf NOT own a Dog'
      },
      {
        'id': 158,
        'name': '1E_Major credit cards owners'
      },
      {
        'id': 175,
        'name': '7 Attributes - smart investors who are credit card owners'
      },
      {
        'id': 156,
        'name': '2E_cat owner who live a healthy live style and play golf'
      },
      {
        'id': 1223,
        'name': 'test1'
      },
      {
        'id': 226,
        'name': 'some audience'
      },
      {
        'id': 230,
        'name': 'Copy of 4E_Healthy Living Practicies in Families and Child Healthhy'
      },
      {
        'id': 186,
        'name': 'one expression, one is zero reach'
      },
      {
        'id': 627,
        'name': 'Kids Friendly Restaurants'
      },
      {
        'id': 1273,
        'name': 'Active Investors'
      },
      {
        'id': 467,
        'name': 'autot12'
      },
      {
        'id': 1284,
        'name': 'Educational model elements provide students with a holistic, values-based education that develops them as individuals and as members of a global society.A process of internal certification is used to assess all study programmes with regard to these guidelines'
      },
      {
        'id': 193,
        'name': '1Positive_1Negative'
      },
      {
        'id': 85,
        'name': '1E_Dog Owners who drive BMW with High credit score'
      },
      {
        'id': 192,
        'name': '3Positive_1Negative'
      },
      {
        'id': 646,
        'name': 'Education Model'
      },
      {
        'id': 1361,
        'name': 'Owners of Automobiles'
      },
      {
        'id': 1457,
        'name': 'Eating Habits among Teens'
      },
      {
        'id': 1458,
        'name': 'Family Welness Program'
      },
      {
        'id': 485,
        'name': '1BMW drivers who play golf'
      },
      {
        'id': 1459,
        'name': 'Healthy Living Practicies in Families with 5+ children'
      },
      {
        'id': 15,
        'name': 'New concept of the CARs  for Dog Owners. Dog owners should own a Car and a Credit car.Dog owners should maintain a healthy living. Dog owners should be a Cruise entusiasts12345'
      },
      {
        'id': 157,
        'name': '1E_cat owners who live a healthy live style and play golf'
      },
      {
        'id': 78,
        'name': '1E_Family restaurants visitors1'
      },
      {
        'id': 422,
        'name': '1E_ 1 Attribute'
      },
      {
        'id': 474,
        'name': '1E_2 Attributes'
      },
      {
        'id': 466,
        'name': '1E_3 Attributes'
      },
      {
        'id': 439,
        'name': '1E_4 Attributes'
      },
      {
        'id': 1526,
        'name': 'Copy of Subaru Dog Friendly Car'
      },
      {
        'id': 438,
        'name': '1 EXP_5 Attributes'
      },
      {
        'id': 628,
        'name': 'NBC Sports Real Golf.NBC Sports Real Golf is a mobile game developed by Lucky Chicken Games with a license from NBC sports.NBCU was aquired by Comcast – original owner of Golf Channel in Feb 2011'
      },
      {
        'id': 1519,
        'name': 'Healthy Living and Eating for Big Families'
      },
      {
        'id': 1483,
        'name': 'Classes for young pet lovers'
      },
      {
        'id': 653,
        'name': 'The elements combine to provide UWC students with a holistic, values-based education that develops them as individuals and as members of a global society.Experience: Active – Academic – Socialasdn others'
      },
      {
        'id': 1553,
        'name': 'Copy of NBC Sports Real Golf.NBC Sports Real Golf is a mobile game developed by Lucky Chicken Games with a license from NBC sports.NBCU was aquired by Comcast – original owner of Golf Channel in Feb 2011'
      },
      {
        'id': 6,
        'name': '4E_Healthy Living Practicies in Families and Child Healthhy'
      },
      {
        'id': 772,
        'name': 'Investing in Mutual Funds'
      },
      {
        'id': 92,
        'name': 'Copy of BMW drivers who play golf'
      },
      {
        'id': 1265,
        'name': 'test2'
      },
      {
        'id': 1268,
        'name': 'test3'
      },
      {
        'id': 1362,
        'name': 'Fast Food Consumption by Teens'
      },
      {
        'id': 775,
        'name': 'Copy of Young Drivers'
      },
      {
        'id': 428,
        'name': '1E_5 Attributes'
      },
      {
        'id': 801,
        'name': 'Educational Model'
      },
      {
        'id': 803,
        'name': 'The elements combine to provide students with a holistic, values-based education that develops them as individuals and as members of a global society.'
      },
      {
        'id': 808,
        'name': 'Amusement Park Visitors'
      },
      {
        'id': 799,
        'name': 'Active Investors1'
      },
      {
        'id': 884,
        'name': 'Copy of Active Investors123'
      },
      {
        'id': 736,
        'name': 'Subaru Dog Friendly Car_Subaru Dog Friendly Car_4 Attributes: Dog Owner | Domestic Traveler | Interest in Travel | Interest in Automotive'
      },
      {
        'id': 228,
        'name': 'Healthy living practices in child care'
      },
      {
        'id': 774,
        'name': 'Funzxcz'
      },
      {
        'id': 1535,
        'name': 'Benefits of Animals to Humans'
      },
      {
        'id': 732,
        'name': 'Cat owners who live a healthy live style and do not own dogs1'
      },
      {
        'id': 427,
        'name': 'Cat owners who live a healthy live style and do not own dogs'
      },
      {
        'id': 735,
        'name': 'Subaru Dog Friendly Car_3 Attributes: Dog Owner | Domestic Traveler | Interest in Travel'
      },
      {
        'id': 734,
        'name': 'Subaru Dog Friendly Car_2 Attributes: Dog Owner |Domestic Traveler'
      },
      {
        'id': 1269,
        'name': 'test4'
      },
      {
        'id': 1368,
        'name': 'Nutrition in Teens'
      },
      {
        'id': 755,
        'name': 'Copy of Classes for young pet lovers'
      },
      {
        'id': 737,
        'name': 'Subaru Dog Friendly Car_5Attributes: Dog Owner | Domestic Traveler | Interest in Travel | Interest in Automotive |Purchase via Online'
      },
      {
        'id': 777,
        'name': 'Education Model Audience'
      },
      {
        'id': 790,
        'name': 'Smart Investors who are credit cards owners'
      },
      {
        'id': 802,
        'name': 'Audience Active Investors: NO NOTE'
      },
      {
        'id': 879,
        'name': 'Copy of Active Investors1'
      },
      {
        'id': 883,
        'name': 'Copy of Active Investors12'
      },
      {
        'id': 733,
        'name': 'Subaru Dog Friendly Car_1 Attribute:Dog Owner'
      },
      {
        'id': 945,
        'name': 'Active Investors12'
      },
      {
        'id': 1013,
        'name': 'Nutrition in Teen'
      }
    ];
    /* tslint:enable */

  }

  public displayFormat1(datum) {
    return `${datum.name}`;
  }

  public stringFilter(datum, filter) {
    return `${datum.name.toLowerCase()}`.includes(filter.toLowerCase());
  }

  public idFilter(datum, filter) {
    return `${datum.id}`.includes(filter.toLowerCase());
  }


}
