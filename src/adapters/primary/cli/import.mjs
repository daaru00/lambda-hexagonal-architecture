import fs from 'fs'
import os from 'os'
import importProduct from '../../../ports/products/importProduct.mjs'

const args = process.argv.slice(2)
if (args.length == 0) {
	console.error('Usage: npm run import <csv file>')
	process.exit(1)
}

const file = args[0]
if (!fs.existsSync(file)) {
	console.error(`File ${file} does not exist`)
	process.exit(1)
}

async function main(file) {
	const csvContent = fs.readFileSync(file).toString()
  
	const products = []
	for (const line of csvContent.split(os.EOL)) {
		if (!line.trim()) {
			continue
		}
		// NOTE: really simple parsing 
		const product = line.split(',')
		products.push({
			name: product[0],
			price: parseFloat(product[1])
		})
	}

	// NOTE: do not perform validation here, will be triggered by port

	const promises = products.map(product => importProduct(product))

	await Promise.all(promises)
}

main(file)
