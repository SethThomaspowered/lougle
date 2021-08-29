const app = new Vue ({
	el: '#app',
	data() {
		return {
			libraries: [
			{id: 37, libraryName: 'Johnsontown Rd', address: '7201 Johnsontown Rd', zipCode: 40272, visited: false},
                {id: 38, libraryName: 'Jessamine', address: '5700 Jessamine Ln', zipCode: 40258, visited: false},
                {id: 39, libraryName: 'Sunlight', address: '10505 Sunlight Ln', zipCode: 40272, visited: false},
				{id: 41, libraryName: 'Minors Lane', address: '8219 Minors Lane', zipCode: 40219, visited: true},
                {id: 42, libraryName: 'Apple Mill', address: '7209 Apple Mill Dr', zipCode: 40228, visited: false},
                {id: 43, libraryName: 'Glenmary', address: '10317 Glenmary Farm', zipCode: 40291, visited: false},
                {id: 44, libraryName: 'Fern Creek', address: '6104 Bardstown Rd', zipCode: 40291, visited: false},
                {id: 45, libraryName: 'Brandwyne', address: '8808 Fairground Rd', zipCode: 40291, visited: false},
                {id: 46, libraryName: 'Cool Brook', address: '8604 Cool Brook Ct', zipCode: 40291, visited: false},
                {id: 47, libraryName: "Bruce's Book", address: '4412 Lochridge Parkway', zipCode: 40299, visited: false},
                {id: 48, libraryName: 'Stone Lakes', address: '3703 Stone Lakes Dr', zipCode: 40299, visited: false},
                {id: 49, libraryName: 'Copperfield', address: '406 Wickfield Dr', zipCode: 40245, visited: true},
                {id: 50, libraryName: 'Bromwell', address: '503 Bromwell Dr', zipCode: 40245, visited: true},
                {id: 51, libraryName: "Heather's Haven", address: '12213 Davidson Dr', zipCode: 40243, visited: true},
                {id: 52, libraryName: 'Running Creek Road', address: 'Running Creek Rd', zipCode: 40243, visited: false},
                {id: 53, libraryName: 'Wolfspring', address: '4400 Wolfspring Dr', zipCode: 40241, visited: false},
                {id: 54, libraryName: 'St Thomas', address: '9616 Westport Rd', zipCode: 40241, visited: false},
                {id: 55, libraryName: 'Boxford', address: '9815 Boxford Way', zipCode: 40242, visited: false},
                {id: 56, libraryName: 'Books4U', address: '1829 Milburt Dr', zipCode: 40223, visited: false},
                {id: 57, libraryName: 'Ormsby', address: '904 Ormsby Ln', zipCode: 40242, visited: false},
                {id: 58, libraryName: 'Eagle Creek',address: 'Eagle Creek Dr', zipCode: 40222, visited: false},
                {id: 59, libraryName: 'Renaissance', address: '3311 Renwood Blvd', zipCode: 40214, visited: false},
                {id: 60, libraryName: 'Sav-a-lot', address: '4148 Taylor Blvd', zipCode: 40215, visited: false},
                {id: 61, libraryName: 'Shively Area Ministeries', address: '4415 Dixie Hwy', zipCode: 40216, visited: false},
                {id: 62, libraryName: 'Butler High', address: '2222 Crums Lane', zipCode: 40216, visited: false},
                {id: 63, libraryName: 'Southside Christian', address: '2220 Dixie Hwy', zipCode: 40210, visited: false},
                {id: 64, libraryName: 'Winkler', address: '1004 Winkler Ave', zipCode: 40208, visited: false},
                {id: 65, libraryName: 'Winnrose', address: '4304 Winnrose Way', zipCode: 40211, visited: false},
				{id: 67, libraryName: 'Kirby', address: '3522 Kirby Ln', zipCode: 40299, visited: false},
                {id: 68, libraryName: "Compton's Book Corner", address: '9220 Auburn Ave', zipCode: 40299, visited: false},
                {id: 69, libraryName: 'Eastside', address: '3401 Eastside Dr', zipCode: 40220, visited: false},
                {id: 70, libraryName: 'Richland', address: '2225 Richland Ave', zipCode: 40218, visited: false},
                {id: 71, libraryName: 'Wilmar', address: '3806 Wilmar Ave', zipCode: 40218, visited: false},
                {id: 72, libraryName: 'Pemaquid Road', address: '3420 Pemaquid Rd', zipCode: 40218, visited: false},
                {id: 73, libraryName: 'Gardiner View', address: '4210 Gardiner View Ave', zipCode: 40213, visited: false},
                {id: 74, libraryName: 'Klondike', address: '3807 Klondike Lane', zipCode: 40218, visited: false},
                {id: 75, libraryName: 'Birdhouse Library', address: '4600 Lynnbrook Dr', zipCode: 40220, visited: true},
                {id: 76, libraryName: 'Lancelot', address: '7600 Lancelot Court', zipCode: 40222, visited: true},
                {id: 77, libraryName: 'Southview', address: '701 Southview Dr', zipCode: 40207, visited: true},
                {id: 78, libraryName: 'Santee', address: '227 Santee Path', zipCode: 40207, visited: true},
                {id: 79, libraryName: 'Rio Vista', address: '10 Rio Vista Dr', zipCode: 40207, visited: true},
                {id: 80, libraryName: 'Winton', address: '302 Winton Avenue', zipCode: 40206, visited: true},
				{id: 82, libraryName: 'Brookfield', address: '3905 Brookfield Ave', zipCode: 40207, visited: false},
                {id: 83, libraryName: 'Hadley', address: '517 W Ormsby', zipCode: 40203, visited: false},  
                {id: 84, libraryName: 'St Williams', address: '1226 W. Oak', zipCode: 40210, visited: false},
                {id: 85, libraryName: 'Louisville Grows', address: '1641 Portland Ave', zipCode: 40203, visited: false},
                {id: 86, libraryName: 'Hotel Louisville', address: '120 West Broadway', zipCode: 40202, visited: false},
                {id: 87, libraryName: 'Freedom Library', address: '1031 E Washington St', zipCode: 40206, visited: true},
                {id: 88, libraryName: 'Woodland', address: '11905 Woodland Rd', zipCode: 40223, visited: false},
                {id: 89, libraryName: 'Lakshmi', address: '12400 Lucas  Lane', zipCode: 40223, visited: false},
                {id: 90, libraryName: 'Cave Spring', address: '2507 Cave Spring Place', zipCode: 40223, visited: false},
                {id: 91, libraryName: 'Featherbell', address: '9010 Featherbell Blvd', zipCode: 40059, visited: false},
                {id: 92, libraryName: 'Cardinal Harbour', address: '1905 Cardinal Harbour Road', zipCode: 40059, visited: false},
                {id: 93, libraryName: 'Little Library Below the Falls', address: '301 S Clark Blvd', zipCode: 47129, visited: false},
                {id: 94, libraryName: 'Clarksville Elementary', address: '700 Randolph Ave', zipCode: 47129, visited: false},
                {id: 95, libraryName: 'Mount Washington', address: '176 Park View Rd Ave', zipCode: 40047, visited: false},
                {id: 96, libraryName: '26th St', address: '527 N. 26th St', zipCode: 40212, visited: false},
                {id: 97, libraryName: 'Redeemer Lutheran Church', address: '3640 River Park Dr', zipCode: 40211, visited: false},
                {id: 98, libraryName: 'West Broadway', address: '4303 West Broadway', zipCode: 40211, visited: false},
                {id: 99, libraryName: 'FMCC & AJ', zipCode: '3810 Garland Ave', zipCode: 40211, visited: false},
                {id: 100, libraryName: 'Westwood Presbyterian', address: '4432 Greenwood', zipCode: 40211, visited: false},
                {id: 101, libraryName: 'Parkland Boys and Girls Club', address: '3200 Greenwood Ave', zipCode: 40211, visited: false},
                {id: 102, libraryName: 'KTs library', address: '2700 Greenwood Ave', zipCode: 40211, visited: false},
                {id: 103, libraryName: 'Brandeis Elementary', address: '2817 W. Kentucky Ave', zipCode: 40210, visited: false},
                {id: 104, libraryName: "Gwen's Community Library", address: '2211 W Kentucky Ave', zipCode: 40210, visited: false},
                {id: 105, libraryName: '2101 Greenwood', address: '2101 Greenwood Ave', zipCode: 40210, visited: false},
                {id: 106, libraryName: 'Wheatley', address: '1107 S 17th St', zipCode: 40210, visited: false},
                {id: 107, libraryName: '1157 S 17th', address: '1157 S 17th St', zipCode: 40210, visited: false},
                {id: 108, libraryName: 'Hale', address: '1632 Hale St', zipCode: 40210, visited: false},
                {id: 109, libraryName: 'First Lutheran', address: '417 E Broadway', zipCode: 40202, visited: false},
                {id: 110, libraryName: 'UofL Hospital Center for Women and Infants', address: '530 South Jackson St', zipCode: 40202, visited: false},
			]
		}
	}
})