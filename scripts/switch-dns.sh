#!/usr/bin/env zsh

dns_address_1="$1"
dns_address_2="$2"

if [[ -z "$dns_address_1" && -z "$dns_address_2" ]]; then
	echo "Custom DNS settings have been cleared"
	exit 0
fi

# switch on CURRENT available network services
scutil --nwi | awk -F': ' '/Network interfaces/ {print $2;}' | gsed 's/ /\n/g' | while read interface; do
	# only change the en* interfaces
	if [[ $interface == en* ]]; then
		networksetup -listnetworkserviceorder | awk "/$interface/{print a}{a=\$0}" | gsed 's/([0-9])//g' | while read networkservicename; do
			echo "$networkservicename" | xargs -I {} networksetup -setdnsservers {} "$dns_address_1" "$dns_address_2"
		done
	fi
done
