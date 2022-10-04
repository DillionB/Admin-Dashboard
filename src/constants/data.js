import images from "./images"

const data = {
    user: {
        name: '- Ryan Cook',
        img: images.avt
    },
    summary: [
        {
            title: 'Overall Happiness',
            subtitle: 'Total increase in happiness > -Projected 2 year growth-',
            value: '%777',
            percent: 80
        },
        {
            title: 'Productivity',
            subtitle: 'Total team output and projected growth',
            value: '9001',
            percent: 74
        },
        {
            title: 'Attractivness',
            subtitle: 'Percentage of people that will find more attractive',
            value: '%8,008 APY',
            percent: 69
        },
        {
            title: 'Life Expectancy',
            subtitle: 'Total increase to life span',
            value: '190-235',
            percent: 110
        }
    ],
    revenueSummary: {
        title: 'Projected Revenue',
        value: '$678,420,000',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '$900K',
            title: 'Per Project'
        },
        {
            value: '9.87M',
            title: 'New Customers'
        },
        {
            value: '1,234',
            title: 'Lines of Code Per Minute'
        },
        {
            value: '$567B',
            title: 'Team Net Worth'
        }
    ],
    revenueByChannel: [
        {
            title: 'Web Development',
            value: 70
        },
        {
            title: 'Game Development',
            value: 40
        },
        {
            title: 'Decentralized Finance',
            value: 60
        },
        {
            title: 'Machine Learning',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        data: [250, 200, 300, 280, 100, 220, 710, 800, 900, 1020, 1150, 1350]
    }
}

export default data